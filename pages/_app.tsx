import { FC } from 'react';
import { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const reactQueryClient = new QueryClient();

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
