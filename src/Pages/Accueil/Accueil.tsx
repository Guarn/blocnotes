import { useState } from 'react';
import Input from '../../UI/Input/Input';
import * as S from './Accueil.styled';

const Accueil = () => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <S.AccueilGlobal>
      <S.Titre>BLOC NOTES</S.Titre>
      <Input
        valeur={inputValue}
        setValeur={setInputValue}
        placeholder="Ajouter une note"
        options={{ min: 3, specialChar: false, frenchChar: false, max: 6 }}
      />
      <T />
    </S.AccueilGlobal>
  );
};

const T = () => <div>TEST</div>;

export default Accueil;
