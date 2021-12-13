import { useEffect, useState } from 'react';
import EntetePage from '../../UI/EntetePage/EntetePage';
import Chat from './Chat/Chat';
import * as S from './Messages.styled';
import Utilisateurs from './Utilisateurs/Utilisateurs';

const Messages = () => {
  const [userId, setUserId] = useState<number | null>(null);
  useEffect(() => {
    document.title = 'Messages';
  }, []);

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
