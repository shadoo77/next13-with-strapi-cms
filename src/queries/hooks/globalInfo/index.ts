import { useQuery } from '@tanstack/react-query';
import qs from 'qs';
import axios from 'axios';
import { GlobalInfo, globalInfoSchema, fallback } from './schema';
import { queryKeys } from '@/queries/queryKeys';
import { apiBaseURL } from '@/config/constants';
import useRouter from '@/hooks/useRouter';
import { isEmpty } from '@/utils';
import { Locale } from '@/i18n';

const searchQuery = qs.stringify(
  {
    populate: {
      maintenanceCard: {
        populate: {
          image: {
            fields: ['url', 'alternativeText', 'caption', 'width', 'height', 'formats']
          }
        }
      },
      siteLogo: {
        fields: ['url', 'alternativeText', 'caption', 'width', 'height', 'formats']
      }
    }
  },
  {
    encodeValuesOnly: true // prettify URL
  }
);

// Fetch function
export const getGlobalInfoByLocale = async (locale: Locale): Promise<GlobalInfo> => {
  if (isEmpty(locale)) {
    return fallback;
  }

  const {
    data: { data }
  } = await axios.get(`${apiBaseURL}/global?locale=${locale}&${searchQuery}`);

  if (!data || isEmpty(data)) {
    return fallback;
  }

  return globalInfoSchema.parse(data);
};

// Function used in useQuery
export const getGlobalInfo = async ({ queryKey }: { queryKey: unknown[] }) => {
  const locale = queryKey[1] as string;

  const data = await getGlobalInfoByLocale(locale as Locale);
  return data;
};

// use query
export const useGlobalInfo = () => {
  const { locale } = useRouter();

  return useQuery({
    queryKey: [queryKeys.globalInfo, locale],
    queryFn: getGlobalInfo,
    initialData: fallback,
    retry: 1,
    refetchOnWindowFocus: false
    // staleTime: 60 * 1000 * 10
  });
};
