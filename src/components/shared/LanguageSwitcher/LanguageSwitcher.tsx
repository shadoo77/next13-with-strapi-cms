'use client';

import Link from 'next/link';
import { locales } from '@/i18n';
import { useTranslation } from '@/contexts/translationContext';
import useRouter from '@/hooks/useRouter';
import { usePageData } from '@/queries/hooks/page';

function LanguageSwitcher() {
  const { asPath, locale } = useRouter();

  const { t } = useTranslation();

  const {
    data: pageData,
    error,
    isError,
    isLoading,
    isFetching
  } = usePageData({ apiID: 'page', kind: 'collectionType' });

  return (
    <>
      <h2>LanguageSwitcher</h2>
      <h2>{t('size')}</h2>
      <div style={{ marginTop: 50 }}>
        {locales
          .filter((l) => locale !== l)
          .map((l, index) => {
            return (
              <span key={l}>
                {index > 0 && ' or '}
                <Link href={l + asPath}>{l}</Link>
              </span>
            );
          })}
      </div>
    </>
  );
}

export default LanguageSwitcher;
