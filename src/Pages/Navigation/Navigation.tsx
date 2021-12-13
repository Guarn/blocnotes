import { useApolloClient } from '@apollo/client';
import axios from 'axios';
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
  // const { data, error } = useTestQuery({
  //   fetchPolicy: 'network-only',
  //   variables: { user: 'Bernard' },
  // });
  const [token1, setToken] = useRecoilState(jwt_token);
  const getRefreshToken = async () => {
    const response = await axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:5000',
    });
    return response;
  };
  const getNewToken = async () => {
    const response = await axios({
      method: 'post',
      withCredentials: true,
      data: { input: { user: 'Divers' } },
      url: 'http://localhost:5000/test',
    });
    const { token, expiresIn } = response.data;
    const refreshExpires = new Date();
    refreshExpires.setSeconds(refreshExpires.getSeconds() + expiresIn);
    setToken({
      token: `Bearer ${token}`,
      expiresAt: refreshExpires,
    });
    setTimeout(() => {
      getNewToken();
    }, expiresIn * 1000);
  };
  // useEffect(() => {
  //   if (token1.expiresAt.getTime() - Date.now() < 500) {
  //     setToken({
  //       token: '',
  //       expiresAt: new Date(),
  //     });
  //     getNewToken().then(() => client.resetStore());
  //   }

  //   // if (data && data.login && token.expiresAt.getTime() - Date.now() < 5000) {
  //   //   console.log('Generate Token');
  //   //   console.log(data.login.token);
  //   //   const refreshExpires = new Date();
  //   //   refreshExpires.setSeconds(refreshExpires.getSeconds() + 4);
  //   //   setToken({
  //   //     token: `Bearer ${data.login.token}`,
  //   //     expiresAt: refreshExpires,
  //   //   });
  //   // }
  // });

  const refreshTime = () => token1.expiresAt.getTime() - Date.now();

  // useEffect(() => {
  //   console.log('Refresh');
  //   refreshTime();
  //   const refreshToken = setTimeout(() => {
  //     getRefreshToken();
  //     if (data && data.login && token.token !== `Bearer ${data.login?.token}`) {
  //       const refreshExpires = new Date();
  //       refreshExpires.setSeconds(refreshExpires.getSeconds() + 8);

  //       setToken({
  //         token: `Bearer ${data.login.token}`,
  //         expiresAt: refreshExpires,
  //       });
  //       client.stop();
  //     }
  //   }, refreshTime());

  //   return () => {
  //     clearTimeout(refreshToken);
  //   };
  // });

  if (true) {
    return (
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/bloc-notes" element={<BlocNotes />} />
        <Route path="/calculette" element={<Calculette />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    );
  }
  return <div>test</div>;
};

export default Navigation;
