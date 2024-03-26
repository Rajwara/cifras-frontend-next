'use client';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// Create an httpLink
const httpLink = createHttpLink({
  uri: 'https://api.cifrasims.com/graphql/',
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = 'eyJhbGciOiJIUzI1NiIsImtpZCI6ImxnUUV6REJ1TzI5VGZCb3IiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzExODM1MzAyLCJpYXQiOjE3MTE0MDMzMDIsImlzcyI6Imh0dHBzOi8vZXpzY2xzd25uYnl0ZXdzamZidnUuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjY1MWJlOWMxLTc1YzMtNGEwZi05N2NmLWZlNmI2MmViZjFhNSIsImVtYWlsIjoianNAY29kZXRlYy5vcmciLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl0sInJvbGVzIjpbImFkbWluaXN0cmF0b3IiXSwidGVuYW50cyI6WyJkZW1vIiwiYWN3ZWxkZXJzIiwiYWNlaXRlb3hpZ2VubyIsImFjZWlveGkiXSwidXNlcl9pZCI6MX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzExNDAzMzAyfV0sInNlc3Npb25faWQiOiI3MWQxYzY4Yi0zNjFjLTQyZTMtYTBhZi0yNDJiNTU3OWVkZjMifQ.KrOdqQmNzk0oPQOv3XTW0kZaW9Kh7lgq_sPcsyZYC5k';

  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      tenant: 'demo',
      // You can add more headers here if needed
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;
