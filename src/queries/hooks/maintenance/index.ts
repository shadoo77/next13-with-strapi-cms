import { useQuery } from '@tanstack/react-query';
import qs from 'qs';
import axios from 'axios';
import { maintenanceSchema, fallback } from './schema';
import { queryKeys } from '@/queries/queryKeys';
import { apiBaseURL } from '@/config/constants';
import useRouter from '@/hooks/useRouter';
import { isEmpty } from '@/utils';

const searchQuery = qs.stringify(
  {
    populate: {
      image: {
        fields: ['url', 'alternativeText', 'caption', 'width', 'height', 'formats']
      }
    }
  },
  {
    encodeValuesOnly: true // prettify URL
  }
);

// Function used in useQuery
export const getMaintenanceInfo = async ({ queryKey }: { queryKey: unknown[] }) => {
  const locale = queryKey[1] as string;

  if (isEmpty(locale)) {
    return fallback;
  }

  const {
    data: { data }
  } = await axios.get(`${apiBaseURL}/maintenance?locale=${locale}&${searchQuery}`);

  if (!data || isEmpty(data)) {
    return fallback;
  }

  return maintenanceSchema.parse(data);
};

// use query
export const useMaintenance = () => {
  const { locale } = useRouter();

  return useQuery({
    queryKey: [queryKeys.maintenance, locale],
    queryFn: getMaintenanceInfo,
    initialData: fallback,
    retry: 1,
    refetchOnWindowFocus: false
  });
};
