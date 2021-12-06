/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MessageGlobal = styled.div<{ leftSide: boolean }>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 80%;
  transform: ${({ leftSide }) =>
    leftSide ? 'translateX(0)' : 'translateX(25%)'};
  margin-bottom: 20px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 15px;
  transition: transform 0.2s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  & > div:first-child {
    flex-direction: ${({ leftSide }) => (leftSide ? 'row' : 'row-reverse')};
  }
  & > div:first-child > div {
    flex-direction: ${({ leftSide }) => (leftSide ? 'row' : 'row-reverse')};
    & > div {
      margin-right: ${({ leftSide }) => (leftSide ? '15px' : '0')};
    }
    & > span {
      margin-right: ${({ leftSide }) => (leftSide ? 'inherit' : '15px')};
    }
  }
`;

export const InfosCtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const UtilisateurCtn = styled.div`
  display: flex;
  align-items: center;
`;
export const PuceUtilisateur = styled.div`
  height: 15px;
  width: 15px;
  background-color: salmon;
  border-radius: 4px;
  margin-right: 15px;
`;

export const NomUtilisateur = styled.span`
  font-family: 'Urbanist';
  font-size: 16px;
`;

export const Updated = styled.span`
  font-family: 'Urbanist';
  opacity: 0.7;
  font-weight: 200;
`;

export const MessageCtn = styled.div`
  font-family: 'Urbanist';
  font-size: 20px;
`;
