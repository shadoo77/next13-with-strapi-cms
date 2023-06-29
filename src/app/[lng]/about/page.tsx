'use client';

import { Suspense } from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';
import Backdrop from '@/components/ui-components/BackDrop';

export default function About(props: any) {
  const {
    params: { lng }
  } = props;

  return (
    <Suspense fallback={<Backdrop open />}>
      <div>
        <h2>About page</h2>
        <Link href={`/${lng}`}>home page</Link>
        <Button variant="contained" color="primary">
          Hello world!
        </Button>
      </div>
    </Suspense>
  );
}
