// // Importing useRouter()
// import { useRouter } from 'next/router';
// import { ReactElement } from 'react';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import type { GetServerSideProps } from 'next';
// import ErrorPage from 'next/error';
// import { dehydrate, QueryClient } from '@tanstack/react-query';
// import axios from 'axios';
// import Page from '@/components/ui-components/Page';
// import { Layout } from '@/components/atoms/Layout';
// import { getLocalizedParams } from '@/utils/localize';
// import { getData, handleRedirection } from '@/utils';
// import { PageDataType } from '@/types';
// import { queryKeys } from '@/queries/queryKeys';
// import { getPageData, usePageData } from '@/queries/hooks/page';
// import useRouterQuery from '@/hooks/useRouterQuery';

// export const getServerSideProps: GetServerSideProps = async ({
//   locale: ssrLocale,
//   query,
//   preview
// }) => {
//   const queryClient = new QueryClient();
//   const { slug, locale } = getLocalizedParams(query, ssrLocale);

//   const ssrTranslations = await serverSideTranslations(ssrLocale as string, ['common']);
//   const props = { ...ssrTranslations };

//   try {
//     // prefetch pages on the server
//     await queryClient.prefetchQuery(
//       [queryKeys.pageData, locale, slug, 'page', 'collectionType', preview || null],
//       getPageData
//     );

//     return {
//       props: {
//         ...props,
//         dehydratedState: dehydrate(queryClient)
//       }
//     };
//   } catch (error) {
//     return {
//       props: {
//         ...props,
//         dehydratedState: dehydrate(queryClient)
//       }
//     };
//   }
// };

// // export const getServerSideProps: GetServerSideProps = async ({
// //   query,
// //   preview,
// //   locale: ssrLocale
// // }) => {
// //   // const queryClient = new QueryClient();
// //   const { slug, locale } = getLocalizedParams(query, ssrLocale);

// //   const ssrTranslations = await serverSideTranslations(locale as string, ['common']);
// //   const props = { ...ssrTranslations };

// //   try {
// //     // prefetch pages on the server
// //     // await queryClient.prefetchQuery([queryKeys.pages], getPages);

// //     const { dataURL } = getData({
// //       slug,
// //       locale,
// //       apiID: 'page',
// //       kind: 'collectionType',
// //       preview
// //     });

// //     const {
// //       data: { data }
// //     } = await axios.get(dataURL);

// //     if (!data?.length) {
// //       return handleRedirection({ locale });
// //     }

// //     return {
// //       props: {
// //         ...props,
// //         pageData: data?.[0] || null,
// //         preview: preview || null
// //         // dehydratedState: dehydrate(queryClient)
// //       }
// //     };
// //   } catch (error) {
// //     return {
// //       props: {
// //         ...props,
// //         // dehydratedState: dehydrate(queryClient),
// //         pageData: null
// //       }
// //     };
// //   }
// // };

// // const Universals = ({ global, pageData, preview }) => {
// //   if (pageData === null) {
// //     return <ErrorPage statusCode={404} />;
// //   }

// //   const blocks = delve(pageData, "attributes.blocks");
// //   return (
// //     <Layout global={global} pageData={pageData} type="pages" preview={preview}>
// //       {blocks && <BlockManager blocks={blocks} />}
// //     </Layout>
// //   );
// // };

// interface PageProps {
//   global: Record<string, unknown>;
//   pageData: PageDataType;
//   preview?: boolean;
// }

// function Universal({ global, preview }: PageProps) {
//   const { asPath } = useRouterQuery();
//   const {
//     data: pageData,
//     error,
//     isError,
//     isLoading,
//     isFetching
//   } = usePageData({ apiID: 'page', kind: 'collectionType' });

//   console.log('^^^^^^^^^^^^^ pageData >>>>>> ', {
//     pageData,
//     error,
//     isError,
//     isLoading,
//     isFetching
//   });

//   if (isLoading || isFetching) {
//     return <h3>loading..</h3>;
//   }

//   if (!pageData) {
//     return <ErrorPage statusCode={404} />;
//   }

//   return (
//     <Page global={global} pageData={pageData} error={error}>
//       <h1>Path :- {asPath} </h1>
//     </Page>
//   );
// }

// Universal.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };

// export default Universal;
