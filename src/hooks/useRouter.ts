'use client';

import { useCallback } from 'react';
import {
  useRouter as useNextRouter,
  useParams,
  usePathname,
  useSearchParams
} from 'next/navigation';
import { FALLBACK_LOCALE } from '@/config/localeHelpers';
import { Locale } from '@/i18n';

function getAsPath(urlStr: string) {
  let url = urlStr.split('/')[2] || '';

  if (url) {
    return `/${url}`;
  }

  return '';
}

export default function useRouter() {
  const { push, replace } = useNextRouter();
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams ? `?${searchParams.toString()}` : '';

  const asPath = getAsPath(pathname + search);

  const locale = (params?.lng as Locale) || FALLBACK_LOCALE.language;

  const getRoute = useCallback(
    (routeName: string) => {
      return `/${locale}/${routeName}`;
    },
    [locale]
  );

  const back = () => window.history.back();

  const getParamValue = (key: string) => searchParams?.get(key) || '';

  const hasParam = (key: string) => searchParams?.has(key);
  return {
    push,
    replace,
    getParamValue,
    hasParam,
    search,
    back,
    locale,
    getRoute,
    pathname,
    asPath
  };
}
