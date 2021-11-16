/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const UtilisateursGlobal = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 25px;
  box-sizing: border-box;
`;

export const UtilisateursCtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const Titre = styled.span`
  font-family: 'Roboto';
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
  opacity: 0.6;
  margin-bottom: 10px;
`;

export const ListeUtilisateursCtn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UtilisateurCtn = styled.div<{ isSelected: boolean }>`
  display: flex;
  background-color: ${({ isSelected }) =>
    isSelected ? '#FFC36A' : 'transparent'};
  cursor: pointer;
  user-select: none;
  border-radius: 16px 0 0 16px;
  align-items: center;
  padding: 5px;
  & > span {
    color: ${({ isSelected }) => (isSelected ? '#676767' : 'inherit')};
    font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  }
  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? '#FFC36A' : 'rgba(0,0,0,0.1)'};
  }
`;

export const PuceUtilisateur = styled.div`
  height: 15px;
  width: 15px;
  background-color: salmon;
  border-radius: 4px;
  margin-left: 15px;
  margin-right: 15px;
`;
export const NomUtilisateur = styled.span`
  font-family: 'Urbanist';
  font-size: 20px;
`;

export const NomUtilisateurEdit = styled.input`
  font-family: 'Urbanist';
  font-size: 20px;
  background-color: transparent;
  outline: none;
  border: none;
`;

export const BoutonAddUtilisateur = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 32px;
  font-family: 'Roboto';
  font-style: italic;
  font-size: 15px;
  border-radius: 5px;
  background-color: #c4c4c4;
  margin-top: 20px;
  color: #676767;
  cursor: pointer;
`;
