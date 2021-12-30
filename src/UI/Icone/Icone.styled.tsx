/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const IconeGlobal = styled.div<{
  taille: string;
  rotation?: { initial: number; onHover: number };
  zoom?: { initial: number; onHover: number };
  animationDuration: number;
  isAnimated: boolean;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}>`
  height: ${({ taille }) => taille};
  width: ${({ taille }) => taille};
  position: ${({ top, left, right, bottom }) =>
    top !== undefined ||
    left !== undefined ||
    right !== undefined ||
    bottom !== undefined
      ? 'absolute'
      : 'initial'};
  top: ${({ top }) => (top !== undefined ? `${top}px` : 'initial')};
  left: ${({ left }) => (left !== undefined ? `${left}px` : 'initial')};
  right: ${({ right }) => (right !== undefined ? `${right}px` : 'initial')};
  bottom: ${({ bottom }) => (bottom !== undefined ? `${bottom}px` : 'initial')};
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
