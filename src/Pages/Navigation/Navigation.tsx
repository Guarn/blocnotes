import dayjs from 'dayjs';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getJWTFromRefreshToken } from '../../Shared/Auth';
import jwt_token from '../../State/Token';
import Accueil from '../Accueil/Accueil';
import BlocNotes from '../BlocNotes/BlocNotes';
import Calculette from '../Calculette/Calculette';
import Connexion from '../Connexion/Connexion';
import Messages from '../Messages/Messages';

const Navigation = () => {
  const [token, setToken] = useRecoilState(jwt_token);

  useEffect(() => {
    if (!token.token) {
      getJWTFromRefreshToken().then((t) => {
        if (t.status === 200) {
          setToken({
            token: t.data.token,
            expiresAt: dayjs().add(t.data.expiresIn, 'minute'),
          });
        }
      });
    }
  });
  return (
    <Routes>
      {!token.token && <Route path="*" element={<Connexion />} />}
      {token.token && (
        <>
          <Route path="/bloc-notes" element={<BlocNotes />} />
          <Route path="/calculette" element={<Calculette />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="*" element={<Accueil />} />
        </>
      )}
    </Routes>
  );
};

export default Navigation;
