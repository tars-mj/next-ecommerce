import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cl1awecib0fvd01yu785ihtpo/master',
  cache: new InMemoryCache()
});
