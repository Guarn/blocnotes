import { useEffect } from 'react';
import EntetePage from '../../UI/EntetePage/EntetePage';
import * as S from './Calculette.styled';
import CalculetteComponent from './Components/Calculette/Calculette';

const Calculette = () => {
  useEffect(() => {
    document.title = 'Calculette';
  }, []);
  return (
    <S.CalculetteGlobal>
      <EntetePage>Calculette</EntetePage>
      <CalculetteComponent />
    </S.CalculetteGlobal>
  );
};

export default Calculette;
