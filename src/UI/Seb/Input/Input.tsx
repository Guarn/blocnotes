import React, { useEffect, useState } from 'react';
import { Icone } from '../Icone/Icone';
import { FormInput, FormInputInline } from './Input.styled';
import Validation from './Validation';
import { StringValidationOptions } from '../../../Utils/stringValidation/interfaces';
import checkString from '../../../Utils/stringValidation';

interface InputProps {
  fieldType: string;
  fieldName: string;
  fieldId: string;
  placeholder?: string;
  options: StringValidationOptions;
}

const Input = ({
  fieldType,
  fieldName,
  fieldId,
  placeholder = '',
  options,
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [erreurs, setErreurs] = useState<string[]>(["Et là c'est le Bug"]);
  const [valeur, setValeur] = useState('');

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
    <FormInputInline>
      <FormInput
        type={fieldType}
        id={fieldId}
        name={fieldName}
        value={valeur}
        onChange={validation}
        placeholder={placeholder}
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
    </FormInputInline>
  );
};

export default Input;
