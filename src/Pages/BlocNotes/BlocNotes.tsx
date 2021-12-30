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
      <form autoComplete="false">
        <Input
          valeur={inputValue}
          setValeur={setInputValue}
          placeholder="Ajouter une note"
          validation={{ type: 'utilisateur' }}
        />
        <Input
          valeur={inputValue}
          setValeur={setInputValue}
          validation={{ type: 'mot de passe' }}
        />
      </form>
    </S.BlocNotesGlobal>
  );
};

export default BlocNotes;
