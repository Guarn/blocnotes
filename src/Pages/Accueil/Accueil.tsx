import { useEffect } from 'react';
import * as S from './Accueil.styled';
import BlocLien from './BlocLien';

const Accueil = () => {
  useEffect(() => {
    document.title = 'Accueil';
  });
  return (
    <S.AccueilGlobal>
      <S.ActifCtn>
        <BlocLien
          couleur="#B57676"
          icone="BlocNotes"
          titre="BLOC NOTES"
          lien="/bloc-notes"
        />
        <BlocLien
          couleur="#7693B5"
          icone="Calculette"
          titre="CALCULETTE"
          lien="/calculette"
        />
        <BlocLien
          couleur="#77B576"
          icone="Messages"
          titre="MESSAGES"
          lien="/messages"
        />
      </S.ActifCtn>
      <S.ActifCtn>
        <BlocLien />
        <BlocLien />
        <BlocLien />
      </S.ActifCtn>
    </S.AccueilGlobal>
  );
};

export default Accueil;
