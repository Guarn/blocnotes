/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import * as S from './Icone.styled';
import { NomIcones, TailleIcone } from './interfaces';
import * as ComposantsIcones from './ListeIcones';

interface IconeProps {
  icone: NomIcones;
  couleurPrincipale?: string;
  couleurSecondaire?: string;
  onClick?: () => void;
  rotate?: boolean;
  zoom?: boolean;
  size?: keyof typeof TailleIcone;
}

const Icone = ({
  icone,
  onClick = () => null,
  couleurPrincipale = '',
  couleurSecondaire = '',
  rotate = false,
  zoom = false,
  size = 'moyen',
}: IconeProps) => {
  // permet d'appeler ce composant en react, car ne prend pas les [] dans les balises
  const IconAsReact = ComposantsIcones[icone];
  return (
    <S.IconeGlobal onClick={onClick} size={TailleIcone[size]}>
      <IconAsReact />
    </S.IconeGlobal>
  );
};

export default Icone;
