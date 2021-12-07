import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { getRecoil } from 'recoil-nexus';
import jwt_token from '../../State/Token';

function link() {
  const httpLink = new HttpLink({
    uri: 'http://localhost:8080/v1/graphql',
  });
  const httpAuthLink = setContext(() => {
    const token = getRecoil(jwt_token);
    if (token.length > 0) {
      return {
        headers: {
          Authorization: token,
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
      connectionParams: () => {
        const token = getRecoil(jwt_token);
        if (token) {
          return {
            headers: {
              Authorization: token,
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
    wsLink,
    httpAuthLink.concat(httpLink)
  );
}

const clientAuth = new ApolloClient({
  link: link(),
  cache: new InMemoryCache(),
});

clientAuth.onResetStore(async () => {
  clientAuth.setLink(link());
});

export default clientAuth;
