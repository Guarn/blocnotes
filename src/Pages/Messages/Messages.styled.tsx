/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { PageDefault } from '../../Shared/css/pageStyles';

export const MessagesGlobal = styled.div`
  ${PageDefault}
  display: flex;
  flex-direction: column;
  & > span:nth-child(1) {
    flex: 1;
  }
  & > div:nth-child(2) {
    flex: 4;
  }
  & > div:nth-child(3) {
    flex: 2;
  }
`;

export const ChatCtn = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  & > div:nth-child(1) {
    flex: 1;
  }
  & > div:nth-child(2) {
    flex: 4;
  }
  & > div:nth-child(3) {
    flex: 1;
  }
`;

export const InvisibleDiv = styled.div`
  opacity: 0;
`;
