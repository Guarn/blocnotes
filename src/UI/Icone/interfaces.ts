import * as ComposantsIcones from './ListeIcones';

export type NomIcones = keyof typeof ComposantsIcones;

export enum TailleIcone {
  'petit' = '12px',
  'moyen' = '15px',
  'grand' = '18px',
  'large' = '30px',
  'extralarge' = '50px',
}

export interface IIcone {
  icone: NomIcones;
  onClick?: () => void;
  style?: IconeStyle;
  options?: IconeOptions;
}

export interface IconeOptions {
  /** Angle de rotation de l'icône au survol */
  rotate?: number;
  /** Niveau de zoom au survol de l'icône au survol */
  zoom?: number;
  /** Animer la transition de survol */
  isAnimated?: boolean;
  /** Durée de l'animation de survol */
  animationDuration?: number;
}

export interface IconeStyle {
  couleurPrincipale?: string;
  couleurSecondaire?: string;
  size?: keyof typeof TailleIcone;
}
