import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout } from 'components/Layout';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import { CartStateContextProvider } from '../components/Cart/CartContext';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'graphql/apolloClient';

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CartStateContextProvider>
        <Layout>
          <DefaultSeo {...SEO} />
          <QueryClientProvider client={client}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Layout>
      </CartStateContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
