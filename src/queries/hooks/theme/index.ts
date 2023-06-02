import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { themesSchema } from './schema';
import { queryKeys } from '@/queries/queryKeys';
import { apiBaseURL } from '@/config/constants';
import useRouter from '@/hooks/useRouter';
import { isEmpty } from '@/utils';

export const getAppThemes = async ({ queryKey }: { queryKey: unknown[] }) => {
  const locale = queryKey[1] as string;

  if (isEmpty(locale)) {
    return [];
  }

  const {
    data: { data }
  } = await axios.get(`${apiBaseURL}/themes?locale=${locale}`);

  if (!data?.length) {
    return [];
  }

  return themesSchema.parse(data);
};

export const useAppThemes = () => {
  const { locale } = useRouter();

  return useQuery({
    queryKey: [queryKeys.themes, locale],
    queryFn: getAppThemes,
    initialData: [],
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,

    select: (data) => {
      if (data?.length) {
        return data.map((item) => ({ ...item.attributes }));
      }
      return [];
    }
  });
};
