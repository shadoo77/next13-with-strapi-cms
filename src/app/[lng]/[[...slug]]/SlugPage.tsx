'use client';

import Link from 'next/link';
import { Typography } from '@mui/material';
import { Locale } from '@/i18n';
import { useTranslation } from '@/contexts/translationContext';

function SlugPage({ lng }: { lng: Locale }) {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h2" component="p">
        Hello Master - now on staging agian
      </Typography>
      <Typography variant="h2" component="p">
        {t('addToCartFailed')}
      </Typography>
      <h2></h2>
      <Link href={`/${lng}/about`}>second page</Link>
    </div>
  );
}

export default SlugPage;
