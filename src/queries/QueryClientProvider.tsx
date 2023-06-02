'use client';

import { useState, PropsWithChildren } from 'react';
import { QueryClientProvider as RQClientProvider } from '@tanstack/react-query';
import { getQueryClient } from './queryClient';

function QueryClientProvider({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();
  const [client] = useState(queryClient);

  return (
    <RQClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </RQClientProvider>
  );
}

export default QueryClientProvider;
