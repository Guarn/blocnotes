/* eslint-disable no-console */
import axios from 'axios';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
  from,
} from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import dayjs from 'dayjs';
import { getRecoil, setRecoil } from 'recoil-nexus';
import jwt_token from '../../State/Token';

const getRefreshToken = async () => {
  const token = getRecoil(jwt_token);
  let tempToken = '';
  if (!token.token) {
    try {
      const res = await axios({
        method: 'post',
        withCredentials: true,
        url: 'http://localhost:5000/refreshToken',
      });
      tempToken = res.data.token;
      setRecoil(jwt_token, {
        token: res.data.token,
        expiresAt: dayjs().add(res.data.expiresIn, 'minute'),
      });
      if (tempToken) {
        return { data: { token: tempToken } };
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (
    (!token.token && !tempToken) ||
    token.expiresAt?.isBefore(dayjs().add(1, 'minute'))
  ) {
    console.log('No Token, getting one....');

    const response = await axios({
      method: 'post',
      withCredentials: true,
      data: { user: 'Bernard' },
      url: 'http://localhost:5000/auth',
    });
    setRecoil(jwt_token, {
      token: response.data.token,
      expiresAt: dayjs().add(response.data.expiresIn, 'minute'),
    });
    console.log('New token added !');

    return response;
  }
  console.log('Using current token');

  return { data: { token: token.token } };
};

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        // eslint-disable-next-line no-console
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }

    if (networkError) {
      // eslint-disable-next-line no-console
      console.log(`[Network error]: ${networkError.message}`);

      forward(operation);
    }
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
          Authorization: `Bearer ${token1.data.token}`,
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
      connectionParams: async () => {
        const token1 = await getRefreshToken();
        if (token1.data.token) {
          return {
            headers: {
              Authorization: `Bearer ${token1.data.token}`,
            },
          };
        }
        return {
          headers: {},
        };
      },
    },
  });

  const retry = new RetryLink();

  return split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    from([retry, wsLink]),
    from([errorLink, httpAuthLink.concat(httpLink)])
  );
}

const clientAuth = new ApolloClient({
  link: link(),
  cache: new InMemoryCache(),
});

export default clientAuth;
