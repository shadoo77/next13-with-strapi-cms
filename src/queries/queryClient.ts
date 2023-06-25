import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { isSSR } from '@/utils';
import { useSnackbarStore } from '@/store/snackbarStore';

const onError = (error: unknown) => {
  if (!isSSR && error && error instanceof Error) {
    useSnackbarStore.getState().openSnackbar({
      message: error?.message,
      variant: 'alert',
      alert: {
        color: 'error'
      },
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }
    });
  }
};

function getQueryClient(): QueryClient {
  return new QueryClient({
    queryCache: new QueryCache({
      onError
    }),
    mutationCache: new MutationCache({
      onError
    })
  });
}

export { getQueryClient };
