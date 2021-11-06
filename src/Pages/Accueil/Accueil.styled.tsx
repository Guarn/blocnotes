/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Theme } from '../../Shared/GlobalTheme/interface';

export const AccueilGlobal = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Titre = styled.div<{ theme: Theme }>`
  font-size: 80px;
  color: ${({ theme }) => theme.text.pale};
  transition: color 0.2s;
  letter-spacing: -5px;
`;
