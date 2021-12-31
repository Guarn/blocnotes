import { useEffect, useState } from 'react';
import EntetePage from '../../UI/EntetePage/EntetePage';
import Input from '../../UI/Input/Input';
import * as S from './BlocNotes.styled';

const BlocNotes = () => {
  const [inputValue1, setInputValue1] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');
  const [inputValue3, setInputValue3] = useState<string>('');
  useEffect(() => {
    document.title = 'Bloc Notes';
  }, []);
  return (
    <S.BlocNotesGlobal>
      <EntetePage>BLOC NOTES</EntetePage>
      <form autoComplete="false" style={{ width: '50%' }}>
        <Input
          valeur={inputValue1}
          setValeur={setInputValue1}
          label="Nom d'utilisateur"
          placeholder="Ajouter une note"
          validation={{ type: 'utilisateur' }}
          obligatoire
        />
        <Input
          valeur={inputValue2}
          setValeur={setInputValue2}
          label="Mot de passe"
          validation={{ type: 'mot de passe' }}
        />
        <Input
          valeur={inputValue3}
          setValeur={setInputValue3}
          validation={{ type: 'mot de passe' }}
        />
      </form>
    </S.BlocNotesGlobal>
  );
};

export default BlocNotes;
