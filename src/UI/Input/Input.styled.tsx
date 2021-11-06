/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Theme } from '../../Shared/GlobalTheme/interface';

export const InputGlobal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ChampInput = styled.input`
  width: 40%;
  outline: none;
  padding: 8px 15px;
  font-family: inherit;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => (theme as Theme).border.pale};
  transition: box-shadow 0.2s;
  background-color: ${({ theme }) => (theme as Theme).body.pale};
  color: ${({ theme }) => (theme as Theme).text.color1};
  &:focus {
    box-shadow: 0 0 6px
      ${({ theme }) => (theme as Theme).shadow.transparent_clair_02};
  }
  &::placeholder {
    font-style: italic;
    color: ${({ theme }) => (theme as Theme).text.pale};
  }
  transition: color 0.2s, background-color 0.2s, border 0.2s, box-shadow 0.2s;
`;
