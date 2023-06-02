'use client';

import React, { Suspense } from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';

function Test({ lng }: { lng: string }) {
  return (
    <Suspense fallback={<div>loading..</div>}>
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

export default Test;
