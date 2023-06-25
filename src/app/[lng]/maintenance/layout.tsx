import { Metadata } from 'next';
import { dehydrate } from '@tanstack/react-query';
import Hydrate from '@/queries/Hydrate';
import { getQueryClient } from '@/queries/queryClient';
import { queryKeys } from '@/queries/queryKeys';
import { getMaintenanceInfo } from '@/queries/hooks/maintenance';

export const metadata: Metadata = {
  title: 'Maintenance page',
  description: 'Maintenance description'
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery([queryKeys.maintenance], getMaintenanceInfo);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <div>{children}</div>
    </Hydrate>
  );
}
