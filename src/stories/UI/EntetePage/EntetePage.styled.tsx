/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const EntetePageGlobal = styled.span`
  font-family: Oswald;
  font-size: 80px;
  color: ${({ theme }) => theme.text.pale};
  transition: color 0.2s;
  letter-spacing: -5px;
  user-select: none;
  text-transform: uppercase;
`;
