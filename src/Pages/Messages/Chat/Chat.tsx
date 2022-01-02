/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { gql } from '@apollo/client';
import moment from 'moment';
import 'moment/locale/fr';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  useAddMessageMutation,
  useGetMessagesQuery,
} from '../../../generated/graphql';
import jwt_token from '../../../State/Token';
import * as S from './Chat.styled';
import Message from './Message';

interface ChatProps {
  userId: number | null;
}
const Chat = ({ userId }: ChatProps) => {
  const [value, setValue] = useRecoilState(jwt_token);
  const [inputValue, setInputValue] = useState('');
  const [addMessage] = useAddMessageMutation({ errorPolicy: 'ignore' });
  const { data, error, subscribeToMore } = useGetMessagesQuery();
  const messagesListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (error && value.token) {
      setValue({ token: '', expiresAt: null });
    }

    if (messagesListRef && messagesListRef.current) {
      messagesListRef.current.scrollBy({
        behavior: 'smooth',
        top: messagesListRef.current.scrollHeight,
      });
    }
  });

  useEffect(() => {
    subscribeToMore({
      document: gql`
        subscription GetMessagesSub {
          messages(order_by: { updated_at: desc }, limit: 1) {
            id
            contenu
            updated_at
            utilisateur {
              id
              pseudonyme
            }
          }
        }
      `,
      updateQuery: (prev, { subscriptionData }) => {
        if (
          !subscriptionData.data ||
          !prev.messages ||
          prev.messages[prev.messages.length - 1].id ===
            subscriptionData.data.messages[0].id
        ) {
          return prev;
        }
        return {
          ...prev,
          messages: [...prev.messages, subscriptionData.data.messages[0]],
        };
      },
    });
  }, []);

  return (
    <S.ChatGlobal>
      <S.MessagesCtn ref={messagesListRef}>
        {data &&
          data.messages &&
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
