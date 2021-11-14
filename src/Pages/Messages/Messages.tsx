import { useEffect } from 'react';
import EntetePage from '../../UI/EntetePage/EntetePage';
import * as S from './Messages.styled';

const Messages = () => {
  useEffect(() => {
    document.title = 'Messages';
  }, []);
  return (
    <S.MessagesGlobal>
      <EntetePage>Messages</EntetePage>
    </S.MessagesGlobal>
  );
};

export default Messages;
