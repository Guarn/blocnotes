/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import * as S from './Icone.styled';
import { IIcone, TailleIcone } from './interfaces';
import * as ComposantsIcones from './ListeIcones';

const Icone = ({
  icone,
  onClick,
  options = {
    rotate: 80,
    zoom: 1,
    isAnimated: false,
    animationDuration: 0.2,
  },
  style = {
    size: 'moyen',
    couleurPrincipale: '',
    couleurSecondaire: '',
  },
}: IIcone) => {
  // permet d'appeler ce composant en react, car ne prend pas les [] dans les balises
  const IconAsReact = ComposantsIcones[icone];

  return (
    <S.IconeGlobal
      onClick={onClick}
      size={TailleIcone[style.size || 'moyen']}
      zoom={options.zoom || 0}
      animationDuration={options.animationDuration || 0}
    >
      <IconAsReact />
    </S.IconeGlobal>
  );
};

export default Icone;
