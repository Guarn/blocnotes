import {
  CheckReturnType,
  CheckStringReturnType,
  StringValidationIn,
} from './interfaces';

const specialCharReg = /[@#&"()`$*€£%+=:/_\-§]/;
const frenchCharReg = /[àâäéèêëîïôöùûü]/i;

const checkString = ({
  valeur,
  options: { min = 0, max = 300, frenchChar = true, specialChar = true },
}: StringValidationIn): CheckStringReturnType => {
  const cumulResults = (
    results: CheckStringReturnType[]
  ): CheckStringReturnType => {
    let isValid = true;
    let errors: string[] = [];
    results.forEach((result) => {
      if (!result.isValid) {
        isValid = false;
        errors = [...errors, ...result.errors];
      }
    });
    if (!isValid) {
      return { isValid, errors };
    }
    return { isValid };
  };

  const minResults = checkMin(valeur, min);
  const maxResults = checkMax(valeur, max);
  const specialCharResults: CheckStringReturnType = specialChar
    ? { isValid: true }
    : checkSpecialChar(valeur);
  const frenchCharResults: CheckStringReturnType = frenchChar
    ? { isValid: true }
    : checkFrenchChar(valeur);

  return cumulResults([
    minResults,
    maxResults,
    frenchCharResults,
    specialCharResults,
  ]);
};

const checkMin = (val: string, minValue: number): CheckReturnType => {
  const isValid = val.length >= minValue;
  if (!isValid) {
    return {
      isValid,
      errors: [`Doit contenir au moins ${minValue} caractères`],
    };
  }
  return {
    isValid,
    errors: [],
  };
};

const checkMax = (val: string, maxValue: number): CheckReturnType => {
  const isValid = val.length <= maxValue;
  if (!isValid) {
    return {
      isValid,
      errors: [`Doit contenir moins de ${maxValue} caractères`],
    };
  }
  return {
    isValid,
    errors: [],
  };
};

const checkSpecialChar = (val: string) => {
  const isValid = !specialCharReg.test(val);

  if (!isValid) {
    return {
      isValid,
      errors: ['Caractères spéciaux non autorisés'],
    };
  }
  return {
    isValid,
    errors: [],
  };
};

const checkFrenchChar = (val: string) => {
  const isValid = !frenchCharReg.test(val);
  if (!isValid) {
    return {
      isValid,
      errors: ['Accents non autorisés'],
    };
  }
  return {
    isValid,
    errors: [],
  };
};

export default checkString;
