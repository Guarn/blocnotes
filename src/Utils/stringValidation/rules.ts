import { StringValidationOptions } from './interfaces';

export const chaineSimple: StringValidationOptions = {
  min: 1,
  max: 255,
  regex: ['texte_FR'],
};

export const utilisateur: StringValidationOptions = {
  min: 3,
  max: 50,
  regex: ['utilisateur'],
};

export const motDePasse: StringValidationOptions = {
  min: 6,
  max: 20,
  regex: ['motDePasse'],
};

export const nombreEntier: StringValidationOptions = {
  min: 1,
  max: 255,
  regex: ['nombreEntier'],
};

export const nombreReel: StringValidationOptions = {
  min: 1,
  max: 255,
  regex: ['nombreReel'],
};

export const email: StringValidationOptions = {
  min: 1,
  max: 255,
  regex: ['email'],
};
