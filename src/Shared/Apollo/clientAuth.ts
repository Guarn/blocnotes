import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getRecoil } from 'recoil-nexus';
import jwt_token from '../../State/Token';

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:8080/v1/graphql',
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: () => {
      const token = getRecoil(jwt_token);

      return {
        headers: {
          Authorization: token,
        },
      };
    },
  },
});

const clientAuth = new ApolloClient({
  link: wsLink,
  cache: new InMemoryCache(),
});

export default clientAuth;
