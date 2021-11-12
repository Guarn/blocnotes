import React, { useEffect, useRef, useState } from 'react';
import checkString from '../../Utils/stringValidation';
import { StringValidationOptions } from '../../Utils/stringValidation/interfaces';
import Icone from '../Icone/Icone';
import * as S from './Input.styled';
import Validation from './Validation';

interface InputProps {
  valeur: string;
  setValeur: (val: string) => void;
  placeholder?: string;
  options: StringValidationOptions;
}
const Input = ({
  valeur,
  setValeur,
  placeholder = '',
  options,
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [erreurs, setErreurs] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const validation = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ): void => {
    if (e) setValeur(e.target.value);
  };

  useEffect(() => {
    const check = checkString({ valeur, options });
    if (!check.isValid) {
      setIsValid(false);
      setErreurs(check.errors);
    } else {
      setIsValid(true);
      setErreurs([]);
    }
  }, [valeur]);

  return (
    <S.InputGlobal>
      <S.ChampInputCtn>
        <S.ChampInput
          placeholder={placeholder}
          value={valeur}
          onChange={validation}
          ref={inputRef}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        {!isValid ? (
          <Icone
            icone="Exclamation"
            style={{ couleurPrincipale: 'salmon' }}
            options={{
              top: 10,
              right: 10,
            }}
          />
        ) : (
          <Icone
            icone="Check"
            style={{ couleurPrincipale: 'lightgreen' }}
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
