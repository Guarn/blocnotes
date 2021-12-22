import * as ComposantsIcones from './ListeIcones';
import * as S from './Icone.styled';

export type NomIcones = keyof typeof ComposantsIcones;

enum TailleIcone {
  'petit' = '12px',
  'moyen' = '15px',
  'grand' = '18px',
}

interface IconeStyle {
  size?: keyof typeof TailleIcone;
  couleurPrincipale?: string;
  couleurSecondaire?: string;
}

interface IconeOptions {
  /** Angle de rotation de l'icône au survol */
  rotation?: { initial: number; onHover: number };
  /** Niveau de zoom de l'icône au survol */
  zoom?: { initial: number; onHover: number };
  /** Animer la transition de survol */
  isAnimated?: boolean;
  /** Durée de l'animation de survol */
  animationDuration?: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

interface IIcone {
  icone: NomIcones;
  onClick?: () => void;
  style?: IconeStyle;
  options?: IconeOptions;
}

export const Icone = ({
  icone,
  onClick,
  style = {
    size: 'moyen',
    couleurPrincipale: '',
    couleurSecondaire: '',
  },
  options = {
    rotation: { initial: 0, onHover: 0 },
    zoom: { initial: 1, onHover: 1 },
    isAnimated: false,
    animationDuration: 0.2,
    top: undefined,
    left: undefined,
    right: undefined,
    bottom: undefined,
  },
}: IIcone) => {
  const IconAsReact = ComposantsIcones[icone];

  return (
    <S.IconeCss
      onClick={onClick}
      size={TailleIcone[style.size || 'moyen']}
      animationDuration={options.animationDuration || 0}
      rotation={options.rotation}
      zoom={options.zoom}
      isAnimated={options.isAnimated || false}
      top={options.top}
      left={options.left}
      right={options.right}
      bottom={options.bottom}
    >
      <IconAsReact
        couleurPrincipale={style.couleurPrincipale}
        couleurSecondaire={style.couleurSecondaire}
      />
    </S.IconeCss>
  );
};
