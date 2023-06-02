import React from 'react';
import Head from 'next/head';
import { isSSR } from '@/utils';

interface ISeoHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  applicationJSON?: any;
  metaImage?: string;
}

function SeoHead({
  title = '',
  description = '',
  canonical,
  applicationJSON,
  metaImage
}: ISeoHeadProps) {
  const APP_ENV = !isSSR
    ? process.env.REACT_APP_ENV || process.env.NEXT_PUBLIC_REACT_APP_ENV
    : process.env.NEXT_PUBLIC_REACT_APP_ENV;

  const isProduction = APP_ENV === 'production';

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      {!isProduction && <meta name="robots" content="noindex" />}
      {canonical && <link rel="canonical" href={canonical} />}

      {applicationJSON && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${JSON.stringify(applicationJSON)}`
          }}
        />
      )}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {metaImage && <meta property="og:image" content={metaImage} />}
    </Head>
  );
}

export default SeoHead;
