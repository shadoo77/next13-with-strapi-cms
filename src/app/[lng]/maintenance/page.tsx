import { dehydrate } from '@tanstack/react-query';
import MaintenancePage from './Maintenance';
import Hydrate from '@/queries/Hydrate';
import { getQueryClient } from '@/queries/queryClient';
import { queryKeys } from '@/queries/queryKeys';
import { Locale } from '@/i18n';
import { getGlobalInfo } from '@/queries/hooks/globalInfo';

type Props = {
  params: { lng: Locale };
};

export default async function Maintenance({ params: { lng } }: Props) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery([queryKeys.globalInfo, lng], getGlobalInfo);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <MaintenancePage />
    </Hydrate>
  );
}
