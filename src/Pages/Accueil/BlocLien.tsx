import Icone from '../../UI/Icone/Icone';
import { NomIcones } from '../../UI/Icone/interfaces';
import * as S from './BlocLien.styled';

interface BlocLienProps {
  couleur?: string;
  titre?: string;
  icone?: NomIcones;
  lien?: string;
}
const BlocLien = ({ couleur = '', icone, lien = '', titre }: BlocLienProps) => (
  <S.BlocLienGlobal to={lien} couleur={couleur} actif={lien.toString()}>
    {titre && <S.LienTitre couleur={couleur}>{titre}</S.LienTitre>}
    {icone && (
      <Icone
        icone={icone}
        style={{ couleurPrincipale: couleur, size: 'extraextralarge' }}
      />
    )}
  </S.BlocLienGlobal>
);

export default BlocLien;
