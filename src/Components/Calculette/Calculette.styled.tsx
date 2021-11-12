import styled from 'styled-components';

export const Row = styled.div<{ col: number }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ col }) => `repeat(${col},${100 / col}%)`};
  & > div {
    border-right: 0.5px solid #343535;
  }
  & > div:last-child {
    border-right: none;
  }
`;

export const Col = styled.div<{ taille: number }>`
  grid-column: span ${({ taille }) => taille};
  width: 100%;
`;

export const Content = styled.div`
  color: white;
  width: 237px;
  height: 318px;
  background-color: #343535;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;

  border: 1px solid #343535;
`;

export const Affichage = styled.div`
  font: 45px 'Fira Sans', sans-serif;
  text-align: end;
  padding-top: 20px;
  color: white;
  width: 225px;
  height: 60px;
  border: none;
  outline: none;
  caret-color: transparent;
  user-select: none;
  background-color: #343535;
`;

export const AffichageAEffacer = styled.div`
  font: 45px 'Fira Sans', sans-serif;
  text-align: end;
  padding-top: 20px;
  color: white;
  width: 225px;
  height: 60px;
  display: inline-block;
  background-color: #343535;
`;
