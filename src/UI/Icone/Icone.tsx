import * as S from './Icone.styled';
import { IIcone, TailleIcone } from './interfaces';
import * as ComposantsIcones from './ListeIcones';

const Icone = ({
  icone,
  onClick,
  options = {
    rotation: { initial: 0, onHover: 0 },
    zoom: { initial: 1, onHover: 1 },
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
      animationDuration={options.animationDuration || 0}
      rotation={options.rotation}
      zoom={options.zoom}
      isAnimated={options.isAnimated || false}
    >
      <IconAsReact
        couleurPrincipale={style.couleurPrincipale}
        couleurSecondaire={style.couleurSecondaire}
      />
    </S.IconeGlobal>
  );
};

export default Icone;
