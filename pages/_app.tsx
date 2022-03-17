import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout } from 'components/Layout';

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
