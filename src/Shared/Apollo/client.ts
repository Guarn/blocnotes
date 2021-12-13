import axios from 'axios';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
  from,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { RetryLink } from '@apollo/client/link/retry';
import { onError } from '@apollo/client/link/error';
import { getRecoil } from 'recoil-nexus';
import jwt_token from '../../State/Token';
import token from './token';

const getRefreshToken = async () => {
  const response = await axios({
    method: 'post',
    data: { user: 'Bernard' },
    url: 'http://localhost:5000/test',
  });
  token.value = response.data.token;
  return response;
};

const linkT = new RetryLink({
  attempts: (count, operation, error) => {
    console.log(error);

    return !!error && operation.operationName !== 'specialCase';
  },
  delay: (count, operation, error) => count * 1000 * Math.random(),
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError.message}`);
    }
    return forward(operation);
  }
);

function link() {
  const httpLink = new HttpLink({
    uri: 'http://localhost:8080/v1/graphql',
  });
  const httpAuthLink = setContext(async () => {
    const token1 = await getRefreshToken();
    if (token1.data.token) {
      return {
        headers: {
          Authorization: token1.data.token,
        },
      };
    }
    return {};
  });

  const wsLink = new WebSocketLink({
    uri: 'ws://localhost:8080/v1/graphql',
    options: {
      lazy: true,
      reconnect: true,
      inactivityTimeout: 1000,
      connectionParams: async () => {
        const token1 = await getRefreshToken();
        console.log(token1);
        if (token1.data.token) {
          return {
            headers: {
              Authorization: token1.data.token,
            },
          };
        }
        return {
          headers: {},
        };
      },
    },
  });

  return split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    from([errorLink, wsLink]),
    httpAuthLink.concat(httpLink)
  );
}

const clientAuth = new ApolloClient({
  link: link(),
  cache: new InMemoryCache(),
});

export default clientAuth;
