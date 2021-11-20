/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import moment from 'moment';
import 'moment/locale/fr';
import { useEffect, useRef, useState } from 'react';
import {
  useAddMessageMutation,
  useGetMessagesSubSubscription,
} from '../../../generated/graphql';
import * as S from './Chat.styled';
import Message from './Message';

interface ChatProps {
  userId: number | null;
}
const Chat = ({ userId }: ChatProps) => {
  const [inputValue, setInputValue] = useState('');
  const [addMessage] = useAddMessageMutation();
  const { data } = useGetMessagesSubSubscription();
  const messagesListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesListRef && messagesListRef.current) {
      messagesListRef.current.scrollBy({
        behavior: 'smooth',
        top: messagesListRef.current.scrollHeight,
      });
    }
  });

  return (
    <S.ChatGlobal>
      <S.MessagesCtn ref={messagesListRef}>
        {data &&
          data.messages.map((message) => (
            <Message
              contenu={message.contenu}
              leftSide={userId !== message.utilisateur.id}
              pseudo={message.utilisateur.pseudonyme}
              updatedAt={moment(message.updated_at).calendar()}
              key={message.id}
            />
          ))}
      </S.MessagesCtn>
      <S.InputCtn>
        <S.MessageInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.code === 'Enter' && inputValue && userId) {
              addMessage({ variables: { message: inputValue, userId } }).then(
                () => {
                  setInputValue('');
                }
              );
            }
          }}
        />
      </S.InputCtn>
    </S.ChatGlobal>
  );
};

export default Chat;
