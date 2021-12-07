import { atom } from 'recoil';

const jwt_token = atom({
  key: 'jwt_token',
  default: '',
});

export default jwt_token;
