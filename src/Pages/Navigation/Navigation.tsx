import { useApolloClient } from '@apollo/client';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useTestQuery } from '../../generated/graphql';
import jwt_token from '../../State/Token';
import Accueil from '../Accueil/Accueil';
import BlocNotes from '../BlocNotes/BlocNotes';
import Calculette from '../Calculette/Calculette';
import Messages from '../Messages/Messages';

const Navigation = () => {
  const client = useApolloClient();
  const { data } = useTestQuery({ variables: { user: 'flo' } });
  const [token, setToken] = useRecoilState(jwt_token);

  useEffect(() => {
    if (data && data.login && token !== `Bearer ${data.login?.token}`) {
      setToken(`Bearer ${data.login?.token}`);
      client.stop();
    }
  });

  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/bloc-notes" element={<BlocNotes />} />
      <Route path="/calculette" element={<Calculette />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  );
};

export default Navigation;
