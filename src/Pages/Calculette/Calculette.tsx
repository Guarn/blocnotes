import { useEffect } from 'react';
import EntetePage from '../../UI/EntetePage/EntetePage';
import * as S from './Calculette.styled';

const Calculette = () => {
  useEffect(() => {
    document.title = 'Calculette';
  }, []);
  return (
    <S.CalculetteGlobal>
      <EntetePage>Calculette</EntetePage>
    </S.CalculetteGlobal>
  );
};

export default Calculette;
