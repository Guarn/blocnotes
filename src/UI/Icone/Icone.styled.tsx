/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const IconeGlobal = styled.div<{
  size: string;
  zoom: number;
  animationDuration: number;
}>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  transform: rotate(0deg);
  transition: 'all 2s';
  &:hover {
    transform: rotate(180deg);
  }
  svg {
    height: 100%;
    width: 100%;
  }
`;
