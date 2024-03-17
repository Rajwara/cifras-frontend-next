'use client';

'use client';

import { ApolloProvider } from '@apollo/client';
import apolloClient from './apolloClient';

interface IGraphQlProviderProps {
  children: React.ReactNode;
}

const GraphQlProvider: React.FC<IGraphQlProviderProps> = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default GraphQlProvider;
