import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useTestQuery } from '../../generated/graphql';
import jwt_token from '../../State/Token';
import EntetePage from '../../UI/EntetePage/EntetePage';
import Chat from './Chat/Chat';
import * as S from './Messages.styled';
import Utilisateurs from './Utilisateurs/Utilisateurs';

const Messages = () => {
  const { data } = useTestQuery({ variables: { user: 'flo' } });
  const [userId, setUserId] = useState<number | null>(null);
  const [token, setToken] = useRecoilState(jwt_token);
  useEffect(() => {
    document.title = 'Messages';
  }, []);
  useEffect(() => {
    if (data && data.login && token !== `Bearer ${data.login?.token}`) {
      setToken(`Bearer ${data.login?.token}`);
    }
  });
  return (
    <S.MessagesGlobal>
      <EntetePage>Messages</EntetePage>
      <S.ChatCtn>
        <Utilisateurs userId={userId} setUserId={setUserId} />
        <Chat userId={userId} />
        <S.InvisibleDiv />
      </S.ChatCtn>
      <S.InvisibleDiv />
    </S.MessagesGlobal>
  );
};

export default Messages;
