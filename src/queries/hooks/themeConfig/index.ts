import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { themeConfigSchema } from './schema';
import { queryKeys } from '@/queries/queryKeys';
import { apiBaseURL } from '@/config/constants';
import { isEmpty } from '@/utils';
import { config } from '@/config';

// Function used in useQuery
export const getThemeConfig = async () => {
  const {
    data: { data }
  } = await axios.get(`${apiBaseURL}/theme-config`);

  if (!data || isEmpty(data)) {
    return config;
  }

  return themeConfigSchema.parse(data);
};

// use query
export const useThemeConfig = () =>
  useQuery({
    queryKey: [queryKeys.themeConfig],
    queryFn: getThemeConfig,
    initialData: config,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000 * 10
  });
