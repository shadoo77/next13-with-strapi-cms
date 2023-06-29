import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { dir } from 'i18next';
import { dehydrate } from '@tanstack/react-query';
import { Suspense } from 'react';
import AppWrapper from './AppWrapper';
import Hydrate from '@/queries/Hydrate';
import { getQueryClient } from '@/queries/queryClient';
import QueryClientProvider from '@/queries/QueryClientProvider';
import { Locale, locales } from '@/i18n';
import Providers from '@/contexts/Providers';
import { queryKeys } from '@/queries/queryKeys';
import { useServerTranslation as getServerTranslation } from '@/i18n/server';
import { getThemeConfig } from '@/queries/hooks/themeConfig';
import GoogleAnalytics from '@/components/organisms/Analytics';
import { ENV } from '@/config/constants';

export async function generateStaticParams() {
  return locales.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ['latin'], preload: true });

type Props = {
  params: { lng: Locale };
};

export async function generateMetadata({ params: { lng } }: Props): Promise<Metadata> {
  const { t } = await getServerTranslation(lng);

  const siteTitle = 'Sells Advies';
  const description = t('siteDescription') || 'any description';

  const metadata: Metadata = {
    title: {
      template: `%s | ${siteTitle}`,
      absolute: siteTitle
    },
    description
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

  await queryClient.prefetchQuery([queryKeys.themeConfig], getThemeConfig);

  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${ENV.GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </head>
      <Suspense>
        <GoogleAnalytics />
      </Suspense>
      <body className={inter.className} suppressHydrationWarning={true}>
        <QueryClientProvider>
          <Hydrate state={dehydratedState}>
            <Providers lng={lng}>
              <AppWrapper>{children}</AppWrapper>
            </Providers>
          </Hydrate>
        </QueryClientProvider>
      </body>
    </html>
  );
}
