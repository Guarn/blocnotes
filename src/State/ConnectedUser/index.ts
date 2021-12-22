import { atom } from 'recoil';

interface ConnectedUserState {
  userId: number | null;
  pseudonyme: string | null;
}

const connectedUser = atom<ConnectedUserState>({
  key: 'connected_user',
  default: { userId: null, pseudonyme: null },
});

export default connectedUser;
