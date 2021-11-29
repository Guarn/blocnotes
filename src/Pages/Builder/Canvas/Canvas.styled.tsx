import styled from 'styled-components';

export const CanvasGlobal = styled.div`
  width: calc(100% - 480px);
  height: calc(100vh - 50px);
`;

export const CanvasEl = styled.canvas`
  animation: appear_canvas 2s forwards;

  @keyframes appear_canvas {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
