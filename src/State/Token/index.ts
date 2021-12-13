import { atom } from 'recoil';

const jwt_token = atom({
  key: 'jwt_token',
  default: { token: '', expiresAt: new Date() },
});

export default jwt_token;
