import { dehydrate } from '@tanstack/react-query';

import Link from 'next/link';
import { Suspense } from 'react';
import Hydrate from '@/queries/Hydrate';
import { getQueryClient } from '@/queries/queryClient';
import { useServerTranslation } from '@/i18n/server';
import { queryKeys } from '@/queries/queryKeys';
import { getPageData } from '@/queries/hooks/page';
import { getAppThemes } from '@/queries/hooks/theme';

export default async function Home(props: any) {
  const {
    params: { lng }
  } = props;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(
    [queryKeys.pageData, lng, 'home-pagina', 'page', 'collectionType', null],
    getPageData
  );

  await queryClient.prefetchQuery([queryKeys.themes, lng], getAppThemes);

  const dehydratedState = dehydrate(queryClient);

  const { t } = await useServerTranslation(lng);

  return (
    <Suspense fallback={<div>loading..</div>}>
      <Hydrate state={dehydratedState}>
        <main>
          <h2>Hello Staging - new deployment</h2>
          <h2>{t('addToCartFailed')}</h2>
          <Link href={`/${lng}/about`}>second page</Link>
        </main>
      </Hydrate>
    </Suspense>
  );
}
