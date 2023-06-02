// import { ReactElement, ReactNode, useState } from 'react';
// import type { AppContext, AppProps } from 'next/app';
// import { appWithTranslation } from 'next-i18next';
// import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Head from 'next/head';
// import { CacheProvider, EmotionCache } from '@emotion/react';
// import CssBaseline from '@mui/material/CssBaseline';
// import { NextPage, NextPageContext } from 'next';
// import App from 'next/app';
// import axios from 'axios';
// import Providers from '@/contexts/Providers';
// import createEmotionCache from '@/config/createEmotionCache';
// import { Snackbar } from '@/components/atoms/Snackbar';
// import { getLocalizedParams } from '@/utils/localize';
// import { apiBaseURL } from '@/config/constants';

// // Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache();
// export interface MyAppProps extends AppProps {
//   emotionCache?: EmotionCache;
//   general?: any;
// }

// // types
// type LayoutProps = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// interface Props {
//   Component: LayoutProps;
// }

// function MyApp({
//   Component,
//   emotionCache = clientSideEmotionCache,
//   pageProps
// }: MyAppProps & Props) {
//   const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

//   const [queryClient] = useState(() => new QueryClient());

//   return (
//     <CacheProvider value={emotionCache}>
//       <Head>
//         <meta name="viewport" content="initial-scale=1, width=device-width" />
//       </Head>
//       <QueryClientProvider client={queryClient}>
//         <Hydrate state={pageProps.dehydratedState}>
//           <Providers>
//             <CssBaseline />
//             <Snackbar />
//             {getLayout(<Component {...pageProps} />)}
//           </Providers>
//         </Hydrate>
//         {/* <ReactQueryDevtools initialIsOpen={false} /> */}
//       </QueryClientProvider>
//     </CacheProvider>
//   );
// }

// export interface MyPageContext extends NextPageContext {
//   general: any;
// }

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const ssrLocale = appContext.ctx.locale;
//   const { locale } = getLocalizedParams(appContext.ctx.query, ssrLocale);

//   const appProps = await App.getInitialProps(appContext);

//   try {
//     const { data: globalData } = await axios.get(
//       `${apiBaseURL}/global?populate[navigation][populate]=*&populate[footer][populate][footerColumns][populate]=*&locale=${locale}`
//     );
//     const globalDataAttributes = globalData?.data?.attributes;

//     return { ...appProps, pageProps: { global: globalDataAttributes } };
//   } catch (error) {
//     return { ...appProps };
//   }
// };

// export default appWithTranslation(MyApp);
