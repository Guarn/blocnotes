import { useTheme } from 'styled-components';
import themeClair from '../../Shared/GlobalTheme/clair';
import Icone from '../Icone/Icone';
import * as S from './BtnModeSombre.styled';

interface BtnModeSombreProps {
  onClick: () => void;
}

const BtnModeSombre = ({ onClick }: BtnModeSombreProps) => {
  const theme = useTheme();
  return (
    <S.SwitchModeGlobal>
      <Icone
        icone="JourNuit"
        onClick={onClick}
        size="extralarge"
        couleurPrincipale={theme.text.normal}
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
};

export default BtnModeSombre;
