/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React from 'react';
import * as S from './Touche.styled';

const couleurDefaut = '#4C4C4B'; // A positionner en dehors du component, car récréé à chaque render sinon
const couleurPaveNum = '#6E6E6E'; // A positionner en dehors du component, car récréé à chaque render sinon
const couleurOperateur = '#FFAE0E'; // A positionner en dehors du component, car récréé à chaque render sinon

interface ToucheProps {
  taille?: number;
  onClick: () => void;
  children: string;
}
const chiffreReg = /[0123456789,]/;
const operateurReg = /^[+\-x/=]{1}$/;

const getCouleur = (val: string) => {
  if (chiffreReg.test(val)) return couleurPaveNum;
  if (operateurReg.test(val)) return couleurOperateur;
  return couleurDefaut;
};

const Touche: React.FC<ToucheProps> = ({ taille = 1, onClick, children }) => (
  <S.ToucheGlobal
    taille={taille}
    onClick={onClick}
    couleur={getCouleur(children)}
  >
    {children}
  </S.ToucheGlobal>
);

export default Touche;
