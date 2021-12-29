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
  // test
  icone: NomIcones;
  size?: keyof typeof TailleIcone;
  couleurPrincipale?: string;
  couleurSecondaire?: string;
  onClick?: () => void;
  /** Options d'animation */
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
