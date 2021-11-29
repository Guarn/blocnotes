import { useEffect, useRef } from 'react';
import * as S from './Canvas.styled';

const changeCanvasSize = (context: CanvasRenderingContext2D, scale: number) => {
  console.log('TTT');

  const root = document.getElementById('root');

  if (root) {
    context.canvas.height = root.getBoundingClientRect().height - 50;
    context.canvas.width = root.getBoundingClientRect().width - 480;
    context.scale(scale, 1);
    context.fillStyle = 'white';
    context.fillRect(
      40,
      60,
      context.canvas.width - 80,
      context.canvas.height - 120
    );
  }
};

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let context: CanvasRenderingContext2D | null | undefined = null;
  useEffect(() => {
    const canvas = canvasRef.current;
    context = canvas?.getContext('2d');
    if (context) changeCanvasSize(context, 2);
  });

  return (
    <S.CanvasGlobal>
      <S.CanvasEl
        ref={canvasRef}
        onClick={(e) => (context ? changeCanvasSize(context, 5.1) : null)}
      />
    </S.CanvasGlobal>
  );
};

export default Canvas;
