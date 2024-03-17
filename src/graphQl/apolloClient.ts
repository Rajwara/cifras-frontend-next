'use client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://api-dev.viwell.app/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
