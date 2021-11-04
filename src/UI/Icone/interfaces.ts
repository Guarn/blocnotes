import * as ComposantsIcones from './ListeIcones';

export type NomIcones = keyof typeof ComposantsIcones;

export enum TailleIcone {
  'petit' = '12px',
  'moyen' = '15px',
  'grand' = '18px',
  'large' = '30px',
  'extralarge' = '50px',
}
