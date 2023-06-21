'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Link as MuiLink } from '@mui/material';
import { GlobalInfo } from '@/queries/hooks/globalInfo/schema';

function SiteLogo({ data }: { data: GlobalInfo['siteLogo'] }) {
  const {
    alternativeText,
    formats: { thumbnail }
  } = data;

  if (!thumbnail) {
    return null;
  }

  const { url, width, height } = thumbnail;

  return (
    <MuiLink component={Link} href={'/'} aria-label="theme-logo">
      <Image src={url} alt={alternativeText} width={width} height={height} priority />
    </MuiLink>
  );
}

export default SiteLogo;
