import * as S from './Builder.styled';
import Canvas from './Canvas/Canvas';
import Elements from './Elements/Elements';
import Menu from './Menu/Menu';
import Proprietes from './Proprietes/Proprietes';

const Builder = () => {
  console.log('test');

  return (
    <S.BuilderGlobal>
      <Menu />
      <S.MainCtn>
        <Elements />
        <Canvas />
        <Proprietes />
      </S.MainCtn>
    </S.BuilderGlobal>
  );
};

// const Builder = () => {
//   const refCanvas = useRef<HTMLCanvasElement>(null);
//   const refBuilder = useRef<HTMLDivElement>(null);
//   const [opts, setOpts] = useState({
//     zoom: 1,
//     x: 0,
//     y: 0,
//     isDragging: false,
//     isLeftClicking: false,
//     stateX: 0,
//     stateY: 0,
//   });

//   const interceptScroll = (e: WheelEvent) => {
//     if (e.ctrlKey) {
//       e.preventDefault();
//     }
//     if (e.deltaY > 0) {
//       setOpts((c) => ({ ...c, zoom: c.zoom >= 0.5 ? c.zoom - 0.1 : c.zoom }));
//     } else {
//       setOpts((c) => ({ ...c, zoom: c.zoom <= 2 ? c.zoom + 0.1 : c.zoom }));
//     }
//   };
//   const interceptSpace = (e: KeyboardEvent) => {
//     if (e.code === 'Space' && e.type === 'keydown' && !opts.isDragging) {
//       setOpts((c) => ({ ...c, isDragging: true }));
//     }
//     if (e.code === 'Space' && e.type === 'keyup') {
//       setOpts((c) => ({ ...c, isDragging: false }));
//     }
//   };

//   const activateMouse = (e: MouseEvent) => {
//     let t: RegExpExecArray | null = null;
//     if (refBuilder && refBuilder.current && refBuilder.current.style.left) {
//       t = /^([0-9]*)/.exec(refBuilder.current.style.left);
//     }

//     if (e.type === 'mousedown' && !opts.isLeftClicking && opts.isDragging) {
//       setOpts((c) => ({
//         ...c,
//         isLeftClicking: true,
//         x: e.pageX,
//         y: e.pageY,
//         stateX: 0,
//         stateY: 0,
//       }));
//     }
//     if (e.type === 'mouseup' && opts.isLeftClicking) {
//       refBuilder.current!.style.top = `${opts.y - opts.stateY}px`;
//       refBuilder.current!.style.left = `${opts.x - opts.stateX}px`;
//       setOpts((c) => ({
//         ...c,
//         isLeftClicking: false,
//         x: 0,
//         y: 0,
//         stateX: 0,
//         stateY: 0,
//       }));
//     }
//   };

//   const recordMouse = (e: MouseEvent) => {
//     refBuilder.current!.style.top = '0px';
//     refBuilder.current!.style.left = '0px';
//     setOpts((c) => ({ ...c, x: e.clientX, y: e.clientY }));
//   };

//   useEffect(() => {
//     if (opts.isDragging && opts.isLeftClicking) {
//       document.addEventListener('mousemove', recordMouse);
//     }
//     document.addEventListener('wheel', interceptScroll, { passive: false });
//     document.addEventListener('keydown', interceptSpace);
//     document.addEventListener('keyup', interceptSpace);
//     document.addEventListener('mousedown', activateMouse);
//     document.addEventListener('mouseup', activateMouse);
//     return () => {
//       document.removeEventListener('wheel', interceptScroll);
//       document.removeEventListener('keydown', interceptSpace);
//       document.removeEventListener('keyup', interceptSpace);
//       document.removeEventListener('mousemove', recordMouse);
//       document.removeEventListener('mousedown', activateMouse);
//       document.removeEventListener('mouseup', activateMouse);
//     };
//   });
//   return (
//     <S.BuilderGlobal
//       ref={refBuilder}
//       isDragging={opts.isDragging}
//       style={{
//         transform: `scale(${opts.zoom}) translate(${opts.x - opts.stateX}px, ${
//           opts.y - opts.stateY
//         }px)`,
//       }}
//     >
//       <S.PageCtn ref={refCanvas} />
//     </S.BuilderGlobal>
//   );
// };

export default Builder;
