'use client';

import Link from 'next/link';
import { Typography } from '@mui/material';
import { Locale } from '@/i18n';
import { useTranslation } from '@/contexts/translationContext';
import { Trans } from '@/components/atoms/Trans';

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
      <Typography variant="h3" component="p">
        {t('test', { param: 'her is the parameter' })}
      </Typography>
      <Trans
        i18nKey="test"
        values={{ param: 'any' }}
        components={{
          bold: <strong style={{ color: 'red', fontWeight: 800, fontSize: '1.5rem' }} />
        }}
      />
      <h2></h2>
      <Link href={`/${lng}/about`}>second page</Link>
    </div>
  );
}

export default SlugPage;
