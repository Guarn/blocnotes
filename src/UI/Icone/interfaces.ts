import * as ComposantsIcones from './ListeIcones';

export type NomIcones = keyof typeof ComposantsIcones;

export enum TailleIcone {
  'petit' = '12px',
  'moyen' = '15px',
  'grand' = '18px',
  'large' = '25px',
  'extralarge' = '40px',
  'extraextralarge' = '80px',
}

export interface IIcone {
  icone: NomIcones;
  onClick?: () => void;
  style?: IconeStyle;
  options?: IconeOptions;
}

export interface IconeOptions {
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

export interface IconeStyle {
  couleurPrincipale?: string;
  couleurSecondaire?: string;
  size?: keyof typeof TailleIcone;
}
