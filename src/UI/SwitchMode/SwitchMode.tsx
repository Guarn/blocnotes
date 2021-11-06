import { DefaultTheme } from 'styled-components';
import themeClair from '../../Shared/GlobalTheme/clair';
import Icone from '../Icone/Icone';
import * as S from './SwitchMode.styled';

interface SwichModeProps {
  onClick: () => void;
  theme: DefaultTheme;
}
const SwitchMode = ({ onClick, theme }: SwichModeProps) => (
  <S.SwitchModeGlobal>
    <Icone
      icone="JourNuit"
      onClick={onClick}
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
  </S.SwitchModeGlobal>
);

export default SwitchMode;
