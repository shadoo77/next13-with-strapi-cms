import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { dir } from 'i18next';
import { dehydrate } from '@tanstack/react-query';
import AppWrapper from './AppWrapper';
import Hydrate from '@/queries/Hydrate';
import { getQueryClient } from '@/queries/queryClient';
import QueryClientProvider from '@/queries/QueryClientProvider';
import { Locale, locales } from '@/i18n';
import Providers from '@/contexts/Providers';
import { getGlobalInfo, getGlobalInfoByLocale } from '@/queries/hooks/globalInfo';
import { queryKeys } from '@/queries/queryKeys';

export async function generateStaticParams() {
  return locales.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ['latin'] });

type Props = {
  params: { lng: Locale };
};

export async function generateMetadata({ params: { lng } }: Props): Promise<Metadata> {
  let siteTitle = 'My App';
  let siteDescription = 'any description';

  try {
    ({ siteTitle, siteDescription } = await getGlobalInfoByLocale(lng));
  } catch (error) {
    // console.error(error);
  }

  const metadata: Metadata = {
    title: {
      template: `%s | ${siteTitle}`,
      absolute: `${siteTitle}`
    },
    description: siteDescription
  };

  return metadata;
}

export default async function RootLayout({
  children,
  params: { lng }
}: {
  children: React.ReactNode;
  params: any;
}) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery([queryKeys.globalInfo, lng], getGlobalInfo);

  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <QueryClientProvider>
          <Hydrate state={dehydratedState}>
            {/* <EmotionRootStyleRegistry> */}
            <Providers lng={lng}>
              <AppWrapper>{children}</AppWrapper>
            </Providers>
            {/* </EmotionRootStyleRegistry> */}
          </Hydrate>
        </QueryClientProvider>
      </body>
    </html>
  );
}
