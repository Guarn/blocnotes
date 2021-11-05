import themeClair from '../../Shared/GlobalTheme/clair';
import { Theme } from '../../Shared/GlobalTheme/interface';
import Icone from '../Icone/Icone';
import * as S from './SwitchMode.styled';

interface SwichModeProps {
  onClick: () => void;
  theme: Theme;
}
const SwitchMode = ({ onClick, theme }: SwichModeProps) => (
  <S.SwitchModeGlobal>
    {theme === themeClair && (
      <Icone
        icone="JourNuit"
        onClick={onClick}
        style={{
          size: 'extralarge',
          couleurPrincipale: theme === themeClair ? 'white' : 'red',
        }}
        options={{ rotate: 180, isAnimated: true }}
      />
    )}
    {theme !== themeClair && (
      <Icone
        icone="JourNuit"
        onClick={onClick}
        style={{
          size: 'extralarge',
          couleurPrincipale: theme === themeClair ? 'white' : 'red',
        }}
        options={{ rotate: 180, isAnimated: false }}
      />
    )}
  </S.SwitchModeGlobal>
);

export default SwitchMode;
