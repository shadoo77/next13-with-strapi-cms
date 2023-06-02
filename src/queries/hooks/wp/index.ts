import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/queries/queryKeys';
import { apiBaseURL } from '@/config/constants';

export const getWp = async () => {
  const { data } = await axios.get(apiBaseURL);
  return data;
  // return wpSchema.parse(data);
};

export const useWp = () =>
  useQuery({
    queryKey: [queryKeys.wp],
    queryFn: getWp,
    placeholderData: {},
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true
  });
