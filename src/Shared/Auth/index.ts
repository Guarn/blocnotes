/* eslint-disable no-console */
import axios from 'axios';
import dayjs from 'dayjs';
import { getRecoil, setRecoil } from 'recoil-nexus';
import jwt_token from '../../State/Token';

const getJWTTokenFromCreds = async ({
  login,
  password,
  rememberMe,
}: AuthProps) => {
  try {
    const response = await axios({
      method: 'post',
      withCredentials: true,
      data: { login, password, rememberMe },
      url: 'http://localhost:5000/auth',
    });

    return response;
  } catch (err) {
    throw new Error(err as string);
  }
};

export const getJWTFromRefreshToken = async () => {
  try {
    const response = await axios({
      method: 'post',
      withCredentials: true,
      url: 'http://localhost:5000/refreshToken',
    });

    return response;
  } catch (err) {
    throw new Error(err as string);
  }
};

export interface AuthProps {
  login?: string;
  password?: string;
  rememberMe?: boolean;
}

export const getAuth = async ({
  login,
  password,
  rememberMe = false,
}: AuthProps) => {
  const token = getRecoil(jwt_token);
  let isRefreshTokenFound = false;

  if (!token.token) {
    // On vérifie si un refreshToken existe et est valide
    console.log('Vérification du Refresh Token...');

    const response = await getJWTFromRefreshToken();
    if (response.status === 200) {
      isRefreshTokenFound = true;
      setRecoil(jwt_token, {
        token: response.data.token,
        expiresAt: dayjs().add(response.data.expiresIn, 'minute'),
      });
      console.log('Refresh Token valide !', response);
      return { data: { token: response.data.token } };
    }
    if (response.status === 204) {
      console.log('Refresh Token invalide ou inexistant');
    }
  }
  // Sinon on s'identifie
  if (
    (login && password && !token.token && !isRefreshTokenFound) ||
    token.expiresAt?.isBefore(dayjs().add(1, 'minute'))
  ) {
    console.log('Pas de Token JWT, identification en cours...');
    const response = await getJWTTokenFromCreds({
      login,
      password,
      rememberMe,
    });
    setRecoil(jwt_token, {
      token: response.data.token,
      expiresAt: dayjs().add(response.data.expiresIn, 'minute'),
    });
    if (response.status === 200) {
      console.log('Nouveau Token ajouté !');
      return { data: { token: response.data.token } };
    }
    console.log("Problème d'identification");
    return null;
  }
  if ((!login || !password) && !token.token && !isRefreshTokenFound) {
    console.log("Informations d'identification manquantes, pas d'appel réseau");
    return { data: { token: token.token } };
  }

  // Dans le cas ou le Token JWT est déjà défini, pas d'appel réseau
  console.log("Token existant, pas d'appel réseau");
  return { data: { token: token.token } };
};

export default getAuth;
