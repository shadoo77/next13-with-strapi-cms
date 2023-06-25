import { dehydrate } from '@tanstack/react-query';
import { Suspense } from 'react';
import SlugPage from './SlugPage';
import Hydrate from '@/queries/Hydrate';
import { getQueryClient } from '@/queries/queryClient';

export default async function Home(props: any) {
  const {
    params: { lng }
  } = props;

  const queryClient = getQueryClient();

  // await queryClient.prefetchQuery(
  //   [queryKeys.pageData, lng, 'home-pagina', 'page', 'collectionType', null],
  //   getPageData
  // );

  const dehydratedState = dehydrate(queryClient);

  return (
    <Suspense fallback={<div>loading..</div>}>
      <Hydrate state={dehydratedState}>
        <SlugPage lng={lng} />
      </Hydrate>
    </Suspense>
  );
}
