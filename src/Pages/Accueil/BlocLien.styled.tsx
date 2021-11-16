/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface BlocLienGlobalProps {
  couleur: string;
  actif: string;
}
export const BlocLienGlobal = styled(Link)<BlocLienGlobalProps>`
  width: 340px;
  height: 273px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.body.assombri};
  border: 1px solid ${({ theme }) => theme.border.assombri};
  transition: background-color 500ms, color 500ms, border-color 500ms,
    transform 200ms, box-shadow 200ms, z-index 200ms;
  transform: scale(1);
  opacity: ${({ actif }) => (actif ? 1 : 0.4)};
  cursor: ${({ actif }) => (actif ? 'pointer' : 'not-allowed')};
  z-index: 1;
  & path {
    fill: ${({ couleur }) => couleur};
  }
  border-radius: 30px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: ${({ actif }) => (actif ? 'scale(1.1)' : 'scale(1)')};
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.4);
    z-index: 9999;
  }
`;

export const LienTitre = styled.span<{ couleur: string }>`
  color: ${({ couleur }) => couleur};
  font-family: 'Oswald';
  font-size: 46px;
  margin-bottom: 20px;
  margin-top: -20px;
`;
