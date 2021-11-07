import React, { useRef, useState } from 'react';
import * as S from './Input.styled';
import Validation from './Validation';

interface InputProps {
  value: string;
  setValue: (val: string) => void;
  placeholder?: string;
}
const Input = ({ value, setValue, placeholder = '' }: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validation = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ): void => {
    if (e) setValue(e.target.value);
  };

  return (
    <S.InputGlobal>
      <S.ChampInput
        placeholder={placeholder}
        value={value}
        onChange={validation}
        ref={inputRef}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      {isFocus && (
        <Validation
          valeur={value}
          options={{ min: 3, max: 5, frenchChar: false }}
        />
      )}
    </S.InputGlobal>
  );
};

export default Input;
