import React, { useEffect, useRef, useState } from 'react';
import checkString, { getValidationRules } from '../../Utils/stringValidation';
import {
  ValidationOptions,
  ValidationTypes,
} from '../../Utils/stringValidation/interfaces';
import Icone from '../Icone/Icone';
import * as S from './Input.styled';
import Validation from './Validation';
import * as rules from '../../Utils/stringValidation/rules';

const getInputTypeFromValidation = (
  validationOptions: ValidationOptions
): React.HTMLInputTypeAttribute => {
  switch (validationOptions.type) {
    case 'nombre entier':
      return 'number';
    case 'nombre réel':
      return 'number';
    case 'email':
      return 'email';
    case 'mot de passe':
      return 'password';
    default:
      return 'text';
  }
};

interface InputProps {
  valeur?: string;
  setValeur: (val: string) => void;
  placeholder?: string;
  validation?: ValidationOptions;
  obligatoire?: boolean;
}
const Input = ({
  valeur,
  setValeur,
  placeholder,
  validation,
  obligatoire = false,
}: InputProps) => {
  const [inputValue, setInputValue] = useState(valeur || '');
  const [isFocus, setIsFocus] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [erreurs, setErreurs] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleValidation = (
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ): void => {
    if (event) {
      if (validation) {
        const rule = getValidationRules(validation);
        const check = checkString(event.target.value, rule);

        setIsValid(check.isValid);
        setErreurs(check.errors);
        setInputValue(event.target.value);
      } else {
        setInputValue(event.target.value);
      }
    }
  };

  const handleBlur = () => {
    setIsFocus(false);
    setValeur(inputValue);
  };

  return (
    <S.InputGlobal>
      <S.ChampInputCtn>
        <S.ChampInput
          type={validation ? getInputTypeFromValidation(validation) : 'text'}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleValidation}
          ref={inputRef}
          onFocus={() => setIsFocus(true)}
          onBlur={handleBlur}
          name="tagada"
        />
        {isValid ? (
          <Icone
            icone="Exclamation"
            couleurPrincipale="salmon"
            options={{
              top: 10,
              right: 10,
            }}
          />
        ) : (
          <Icone
            icone="Check"
            couleurPrincipale="lightgreen"
            options={{
              top: 10,
              right: 10,
            }}
          />
        )}
        {isFocus && !isValid && <Validation erreurs={erreurs} />}
      </S.ChampInputCtn>
    </S.InputGlobal>
  );
};

export default Input;
