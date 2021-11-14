import { DefaultTheme } from 'styled-components';
import themeClair from '../../Shared/GlobalTheme/clair';
import Icone from '../Icone/Icone';
import * as S from './LienAccueil.styled';

interface LienAccueilProps {
  theme: DefaultTheme;
}

const LienAccueil = ({ theme }: LienAccueilProps) => (
  <S.LienAccueilGlobal to="/">
    <Icone
      icone="Dashboard"
      style={{
        size: 'extralarge',
        couleurPrincipale: theme.text.normal,
      }}
      options={{
        zoom: { initial: 1, onHover: 1.2 },
        rotation: {
          initial: theme === themeClair ? 0 : 180,
          onHover: theme === themeClair ? 0 : 180,
        },
        isAnimated: true,
        animationDuration: 0.2,
      }}
    />
  </S.LienAccueilGlobal>
);

export default LienAccueil;
