/* eslint-disable import/prefer-default-export */
import { Chiffre, Operateur } from './interfaces';

export const calcul = (nbr1: Chiffre, nbr2: Chiffre, operateur: Operateur) => {
  if (nbr1 && nbr2) {
    switch (operateur) {
      case '*':
        return nbr1 * nbr2;
      case '/':
        return nbr1 / nbr2;
      case '+':
        return nbr1 + nbr2;
      case '-':
        return nbr1 - nbr2;
      default:
        return null;
    }
  }
  return null;
};
