import { Dayjs } from 'dayjs';
import { atom } from 'recoil';

const jwt_token = atom<{ token: string; expiresAt: Dayjs | null }>({
  key: 'jwt_token',
  default: { token: '', expiresAt: null },
});

export default jwt_token;
