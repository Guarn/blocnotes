import { useState } from 'react';
import Input from '../../UI/Input/Input';
import * as S from './Accueil.styled';

const Accueil = () => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <S.AccueilGlobal>
      <S.Titre>BLOC NOTES</S.Titre>
      <Input
        value={inputValue}
        setValue={setInputValue}
        placeholder="Ajouter une note"
      />
    </S.AccueilGlobal>
  );
};

export default Accueil;
