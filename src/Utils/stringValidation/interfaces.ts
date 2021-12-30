import * as reg from './regex';

export interface StringValidationIn {
  valeur: string;
  options: StringValidationOptions;
}

export interface StringValidationOut {
  isValid: boolean;
  errors: string[];
}

export type StringValidationOptions = CommonRules & RegexRules;

export interface CommonRules {
  min?: number;
  max?: number;
  required?: boolean;
}

export interface RegexRules {
  regex?: RegexCheck[];
}

export type ValidationOptions =
  | {
      type: Exclude<ValidationTypes, 'custom'>;
    }
  | {
      type: Extract<ValidationTypes, 'custom'>;
      options: Required<StringValidationOptions>;
    };

export type ValidationTypes =
  | 'utilisateur'
  | 'mot de passe'
  | 'chaine simple'
  | 'nombre entier'
  | 'nombre réel'
  | 'email'
  | 'custom';

export interface CheckReturnType {
  isValid: boolean;
  errors: string[];
}

export type RegexCheck = keyof typeof reg;
export type ErrorMessages = {
  [key in RegexCheck]: string;
} & {
  min: string;
  max: string;
  required: string;
};
