import { errorMessages } from './errorMessages';
import { CheckReturnType, CommonRules, RegexRules } from './interfaces';
import * as reg from './regex';

export const checkGenRules = (
  value: string,
  rules: CommonRules
): CheckReturnType => {
  let isValid = true;
  const errors: string[] = [];

  const { max, min, required } = rules;

  if (min && value.length < min) {
    isValid = false;
    errors.push(errorMessages['min'].replace('#', min.toString()));
  }
  if (max && value.length > max) {
    isValid = false;
    errors.push(errorMessages['max'].replace('#', max.toString()));
  }

  if (value.length === 0 && required) {
    isValid = false;
    errors.push(errorMessages['required']);
  }

  return { isValid, errors };
};

export const checkRegexRule = (
  value: string,
  rules: RegexRules
): CheckReturnType => {
  let isValid = true;
  const errors: string[] = [];

  rules.regex?.forEach((regName) => {
    if (!reg[regName].test(value)) {
      isValid = false;
      errors.push(errorMessages[regName]);
    }
  });

  return { isValid, errors };
};
