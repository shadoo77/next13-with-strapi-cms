// import { ReactElement } from 'react';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import type { GetServerSideProps } from 'next';
// import { dehydrate, QueryClient } from '@tanstack/react-query';
// import { usePages } from '@/queries/hooks/page';
// import Page from '@/components/ui-components/Page';
// import { Layout } from '@/components/atoms/Layout';
// import { queryKeys } from '@/queries/queryKeys';
// import { getPages } from '@/queries/hooks/page';

// export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
//   const queryClient = new QueryClient();

//   // prefetch pages on the server
//   await queryClient.prefetchQuery([queryKeys.pages], getPages);

//   return {
//     props: {
//       ...(await serverSideTranslations(locale as string, ['common'])),
//       dehydratedState: dehydrate(queryClient)
//     }
//   };
// };

// const Home = () => {
//   const { data, error } = usePages();
//   console.log('^^^^^^^^^^^^^ data >>>>>> ', data);

//   return (
//     <Page title="Home" error={error}>
//       <h2>Home page</h2>
//     </Page>
//   );
// };

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };

// export default Home;
