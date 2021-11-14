import { useEffect, useState } from 'react';
import EntetePage from '../../UI/EntetePage/EntetePage';
import Input from '../../UI/Input/Input';
import * as S from './BlocNotes.styled';

const BlocNotes = () => {
  const [inputValue, setInputValue] = useState<string>('');
  useEffect(() => {
    document.title = 'Bloc Notes';
  }, []);
  return (
    <S.BlocNotesGlobal>
      <EntetePage>BLOC NOTES</EntetePage>
      <Input
        valeur={inputValue}
        setValeur={setInputValue}
        placeholder="Ajouter une note"
        options={{ min: 3, specialChar: false, frenchChar: false, max: 6 }}
      />
    </S.BlocNotesGlobal>
  );
};

export default BlocNotes;
