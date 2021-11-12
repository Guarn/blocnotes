import Calculette from '../../Components/Calculette/Calculette';
import * as S from './Accueil.styled';

const Accueil = () => (
  <S.AccueilGlobal>
    <S.Titre>BLOC NOTES</S.Titre>
    <Calculette />
  </S.AccueilGlobal>
);

export default Accueil;
