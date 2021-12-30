import { checkGenRules, checkRegexRule } from './genericFunctions';
import {
  CheckReturnType,
  StringValidationOptions,
  ValidationOptions,
} from './interfaces';
import * as rules from './rules';

export const getValidationRules = (
  validation: ValidationOptions
): StringValidationOptions => {
  switch (validation.type) {
    case 'nombre entier':
      return rules.nombreEntier;
    case 'nombre réel':
      return rules.nombreReel;
    case 'utilisateur':
      return rules.utilisateur;
    case 'mot de passe':
      return rules.motDePasse;
    case 'email':
      return rules.email;
    default:
      return rules.chaineSimple;
  }
};

const checkString = (
  valeur: string,
  options: StringValidationOptions
): CheckReturnType => {
  let isValid = true;
  let errors: string[] = [];

  const resultsGen = checkGenRules(valeur, options);
  const resultsReg = checkRegexRule(valeur, options);

  if (!resultsGen.isValid || !resultsReg.isValid) {
    isValid = false;
  }
  errors = [...errors, ...resultsGen.errors, ...resultsReg.errors];
  return { isValid, errors };
};

export default checkString;
