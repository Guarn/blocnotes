import { split, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

export const headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZmxvIiwiY2xhaW1zIjp7IngtaGFzdXJhLXJvbGUiOiJhdXRob3JpemVkIiwieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJhdXRob3JpemVkIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImF1dGhvcml6ZWQifSwiaWF0IjoxNjM4NzY4Nzk2LCJleHAiOjE2Mzg4NTUxOTZ9.DZHgQ3oafcUJBPbWAseor0u6s2VyflPOIKdQxWGXAyQ',
};
const httpLink = new HttpLink({
  uri: 'http://localhost:8080/v1/graphql',
  headers,
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:8080/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers,
    },
  },
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
