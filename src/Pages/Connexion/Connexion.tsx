import React, { FormEvent, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Icone from '../../UI/Icone/Icone';
import * as S from './Connexion.styled';
import getAuth, { AuthProps } from '../../Shared/Auth';
import EntetePage from '../../UI/EntetePage/EntetePage';

const Connexion = () => {
  const [firstLoad, setFirstLoad] = useState({
    isFirstLoad: true,
    firstRender: dayjs(),
  });

  const [user, setUser] = useState({
    login: '',
    password: '',
    rememberMe: false,
  });

  useEffect(() => {
    if (
      firstLoad.isFirstLoad &&
      dayjs().isAfter(firstLoad.firstRender.add(1, 'second'))
    ) {
      setFirstLoad({ ...firstLoad, isFirstLoad: false });
    }
  });

  const onChange = (val: Partial<AuthProps>) => {
    setUser((c) => ({ ...c, ...val }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getAuth(user)
      .then((t) => {
        console.log(t);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <S.ConnexionGlobal>
      <S.Encart>
        <EntetePage>CONNEXION</EntetePage>
        <S.Form
          autoComplete="new-password"
          firstLoad={firstLoad.isFirstLoad}
          onSubmit={(e) => onSubmit(e)}
        >
          <S.Label htmlFor="utilisateur">Nom d&apos;utilisateur</S.Label>
          <S.Contour>
            <S.Input
              type="text"
              name="utilisateur"
              id="utilisateur"
              onChange={(e) => onChange({ login: e.target.value })}
            />
          </S.Contour>
          <S.Label htmlFor="passe">Mot de passe</S.Label>
          <S.Contour>
            <S.Input
              type="password"
              name="passe"
              id="passe"
              onChange={(e) => onChange({ password: e.target.value })}
            />
          </S.Contour>
          <S.ConnexionAuto>
            <Icone
              icone="Checkbox"
              size="extralarge"
              couleurPrincipale="#B57676"
            />
            <S.ConnexionAutoTexte>Se souvenir de moi</S.ConnexionAutoTexte>
          </S.ConnexionAuto>
          <S.Submit type="submit">Se connecter</S.Submit>
        </S.Form>
      </S.Encart>
    </S.ConnexionGlobal>
  );
};

export default Connexion;
