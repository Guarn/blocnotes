/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Transition } from '../../../Shared/css/pageStyles';

export const ChatGlobal = styled.div`
  width: 100%;
  height: 100%;
  max-height: 800px;
  max-width: 550px;
  background-color: ${({ theme }) => theme.body.assombri};
  border: 2px solid ${({ theme }) => theme.border.assombri};
  border-radius: 17px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
  ${Transition}
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px;
`;

export const MessagesCtn = styled.div`
  height: calc(100% - 40px);
  box-sizing: border-box;
  padding: 10px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    margin-top: 15px;
    margin-bottom: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export const InputCtn = styled.div`
  box-sizing: border-box;
  height: 40px;
`;

export const MessageInput = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.body.pale};
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text.normal};
  font-family: 'Roboto';
  font-size: 1rem;
  padding-left: 10px;
  box-sizing: border-box;
  ${Transition}
`;
