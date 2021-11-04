/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const IconeGlobal = styled.div<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  svg {
    height: 100%;
    width: 100%;
  }
`;
