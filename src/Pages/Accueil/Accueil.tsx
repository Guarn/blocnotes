import useModeSombre from '../../CustomHooks/useModeSombre';
import Icone from '../../UI/Icone/Icone';
import * as S from './Accueil.styled';

const Accueil = () => {
  const [, ChangeTheme] = useModeSombre();

  return (
    <S.AccueilGlobal>
      <Icone icone="JourNuit" size="extralarge" onClick={ChangeTheme} />
    </S.AccueilGlobal>
  );
};

export default Accueil;
