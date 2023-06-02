import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { pageSchema, pageFallback } from './schema';
import { queryKeys } from '@/queries/queryKeys';
import { apiBaseURL } from '@/config/constants';
import useRouter from '@/hooks/useRouter';
// import { getLocalizedParams } from '@/utils/localize';
import { getData } from '@/utils';

const fallback = {};

export const getPageById = async ({ queryKey }: { queryKey: unknown[] }) => {
  const pageId = queryKey[1];
  const { data } = await axios.get(`${apiBaseURL}/wp/v2/pages/${pageId}`);
  return pageSchema.parse(data);
};

export const getPageData = async ({ queryKey }: { queryKey: unknown[] }) => {
  const locale = queryKey[1] as string;
  const slug = queryKey[2] as string | string[];
  const apiID = queryKey[3] as string;
  const kind = queryKey[4] as string;
  const preview = queryKey[5] as boolean;

  // if (isEmpty(locale) || isEmpty(slug) || isEmpty(apiID) || isEmpty(kind)) {
  //   return {};
  // }

  const { dataURL } = getData({
    slug,
    locale,
    apiID,
    kind,
    preview
  });

  const {
    data: { data }
  } = await axios.get(dataURL);

  if (!data?.length) {
    return fallback;
  }

  return data[0];
};

export const getPages = async () => {
  const { data } = await axios.get(`${apiBaseURL}/pages?pagination[pageSize]=10`);
  // const { data } = await axios.get(`${apiBaseURL}/wp/v2/pages`);
  return data;
  // return pagesSchema.parse(data);
};

interface UsePageDataProps {
  apiID: string;
  kind: string;
  preview?: boolean;
}

export const usePageData = ({ apiID, kind, preview = false }: UsePageDataProps) => {
  const { locale } = useRouter();
  // const { slug, locale } = getLocalizedParams(query, localeCode);
  const slug = 'home-pagina';

  return useQuery({
    queryKey: [queryKeys.pageData, locale, slug, apiID, kind, preview],
    queryFn: getPageData,
    initialData: {},
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    enabled: !!(locale && slug && apiID && kind)
    // select: (data) => {
    //   if (!data?.length) {
    //     return fallback;
    //   }

    //   return data.data;
    // }
  });
};

export const usePageById = (pageId: string) =>
  useQuery({
    queryKey: [queryKeys.page, pageId],
    queryFn: getPageById,
    placeholderData: pageFallback,
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    enabled: !!pageId
  });

export const usePages = () =>
  useQuery({
    queryKey: [queryKeys.pages],
    queryFn: getPages,
    placeholderData: [],
    retry: 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true
  });
