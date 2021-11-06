/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const IconeGlobal = styled.div<{
  size: string;
  rotation?: { initial: number; onHover: number };
  zoom?: { initial: number; onHover: number };
  animationDuration: number;
  isAnimated: boolean;
}>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  transform: ${({ rotation, zoom }) =>
    `rotate(${rotation ? rotation.initial : 0}deg) scale(${
      zoom ? zoom.initial : 1
    })`};
  transition: ${({ isAnimated, animationDuration }) =>
    isAnimated ? `transform ${animationDuration}s, fill 0.2s` : 'none'};
  &:hover {
    transform: ${({ rotation, zoom }) =>
      `rotate(${rotation ? rotation.onHover : 0}deg) scale(${
        zoom ? zoom.onHover : 1
      })`};
  }
  & > svg {
    height: 100%;
    width: 100%;
  }
`;
