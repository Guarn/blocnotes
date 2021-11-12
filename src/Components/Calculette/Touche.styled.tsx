/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Col } from './Calculette.styled';

export const ToucheGlobal = styled(Col)<{ couleur: string; taille: number }>`
  font: 20px 'Fira Sans', sans-serif;
  box-sizing: border-box;
  color: white;
  height: 47px;
  width: 100%;
  margin: 0.5px;
  background-color: ${({ couleur }) => couleur};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 0.8;
  }
`;

export const ToucheDefaut = styled(ToucheGlobal)`
  background-color: red;
`;
