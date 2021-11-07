export interface StringValidationIn {
  valeur: string;
  options: StringValidationOptions;
}

export interface StringValidationOut {
  isValid: boolean;
  errors: string[];
}

export interface StringValidationOptions {
  min?: number;
  max?: number;
  specialChar?: boolean;
  frenchChar?: boolean;
}

export interface CheckReturnType {
  isValid: boolean;
  errors: string[];
}

export type CheckStringReturnType =
  | {
      isValid: true;
    }
  | { isValid: false; errors: string[] };
