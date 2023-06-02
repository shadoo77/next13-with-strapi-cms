import { QueryClient } from '@tanstack/react-query';

function getQueryClient(): QueryClient {
  return new QueryClient();
}

export { getQueryClient };
