'use client';

import { ReactNode, Suspense } from 'react';
import { Container, useTheme } from '@mui/material';
import { Snackbar } from '@/components/atoms/Snackbar';
import { AppBar } from '@/components/atoms/AppBar';
import { Drawer } from '@/components/atoms/Drawer';
import { CookieBanner } from '@/components/organisms/Analytics/CookieBanner';

interface Props {
  children: ReactNode;
}

function AppWrapper({ children }: Props) {
  const theme = useTheme();

  return (
    <main style={{ backgroundColor: theme.palette.grey['200'] }}>
      <Snackbar />
      <Suspense fallback={<div>loading..</div>}>
        <AppBar />

        <Container
          maxWidth="lg"
          sx={{ backgroundColor: theme.palette.background.default, height: 'calc(100vh - 72px)' }}
        >
          <Drawer />
          <CookieBanner />
          {children}
        </Container>
      </Suspense>
    </main>
  );
}

export default AppWrapper;
