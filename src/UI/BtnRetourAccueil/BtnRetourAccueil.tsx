import { useTheme } from 'styled-components';
import themeClair from '../../Shared/GlobalTheme/clair';
import Icone from '../Icone/Icone';
import * as S from './BtnRetourAccueil.styled';

const LienAccueil = () => {
  const theme = useTheme();

  return (
    <S.LienAccueilGlobal to="/">
      <Icone
        icone="Dashboard"
        size="extralarge"
        couleurPrincipale={theme.text.normal}
        options={{
          zoom: { initial: 1, onHover: 1.2 },
          rotation: {
            initial: theme === themeClair ? 180 : 0,
            onHover: theme === themeClair ? 180 : 0,
          },
          isAnimated: true,
          animationDuration: 0.2,
        }}
      />
    </S.LienAccueilGlobal>
  );
};

export default LienAccueil;
