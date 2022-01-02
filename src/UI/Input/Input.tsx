import React, { useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import checkString, { getValidationRules } from '../../Utils/stringValidation';
import { ValidationOptions } from '../../Utils/stringValidation/interfaces';
import Icone from '../Icone/Icone';
import * as S from './Input.styled';
import Validation from './Validation';

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
  /** Valeur du champ */
  valeur?: string;
  /** Appelé sur Event OnBlur */
  setValeur: (val: string) => void;
  /** Intitulé du champ */
  label?: string;
  /** Placement et couleur du label */
  labelOptions?: {
    placement?: 'top' | 'left';
    couleurs?: { themeClair: string; themeSombre: string };
    opacity?: number;
  };
  /** Placeholder */
  placeholder?: string;
  /** Règles de validation du contenu */
  validation?: ValidationOptions;
  /** Obligatoire (ajoute un *) */
  obligatoire?: boolean;
}
const Input = ({
  valeur,
  setValeur,
  label,
  labelOptions,
  placeholder,
  validation,
  obligatoire = false,
}: InputProps) => {
  const [uniqueId] = useState(uuid());
  const [inputValue, setInputValue] = useState(valeur || '');
  const [isValid, setIsValid] = useState(true);
  const [erreurs, setErreurs] = useState<string[]>([]);
  const [isEyeDisabled, setIsEyeDisabled] = useState(false);

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
      }
      setInputValue(event.target.value);
    }
  };

  const handleMDPVisibilite = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.type = isEyeDisabled ? 'password' : 'text';
    }
    setIsEyeDisabled((c) => !c);
  };

  const handleBlur = () => {
    setValeur(inputValue);
  };

  return (
    <S.InputGlobal>
      <S.ChampInputCtn labelOptions={labelOptions}>
        {label && (
          <S.Label htmlFor={uniqueId}>
            {label}
            {obligatoire && <span> *</span>}
          </S.Label>
        )}
        <S.ChampInput
          type={validation ? getInputTypeFromValidation(validation) : 'text'}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleValidation}
          ref={inputRef}
          onBlur={handleBlur}
          name={uniqueId}
          id={uniqueId}
        />

        {inputValue && (
          <Icone
            icone={isValid ? 'Check' : 'Exclamation'}
            couleurPrincipale={isValid ? 'lightgreen' : 'salmon'}
            options={{
              top: label ? 35 : 12,
              right: 10,
            }}
          />
        )}
        {validation?.type === 'mot de passe' && (
          <Icone
            icone={isEyeDisabled ? 'Oeil' : 'OeilDisabled'}
            onClick={handleMDPVisibilite}
            taille="grand"
            couleurPrincipale="lightblue"
            options={{
              top: label ? 35 : 12,
              right: inputValue ? 35 : 10,
              zoom: { initial: 1, onHover: 1.2 },
              isAnimated: true,
              animationDuration: 0.2,
            }}
          />
        )}

        {erreurs.length > 0 && <Validation erreurs={erreurs} />}
      </S.ChampInputCtn>
    </S.InputGlobal>
  );
};

export default Input;
