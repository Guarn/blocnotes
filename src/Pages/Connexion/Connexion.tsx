import React, { FormEvent, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Icone from '../../UI/Icone/Icone';
import * as S from './Connexion.styled';
import getAuth, { AuthProps } from '../../Shared/Auth';
import EntetePage from '../../UI/EntetePage/EntetePage';
import Input from '../../UI/Input/Input';

const Connexion = () => {
  const [firstLoad, setFirstLoad] = useState({
    isFirstLoad: true,
    firstRender: dayjs(),
  });

  const [user, setUser] = useState({
    login: '',
    password: '',
    rememberMe: true,
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

    getAuth(user).catch((err) => {
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
          <Input
            valeur={user.login}
            setValeur={(val) => onChange({ login: val })}
            label="Nom d'utilisateur"
            validation={{ type: 'utilisateur' }}
            obligatoire
          />
          <Input
            valeur={user.password}
            setValeur={(val) => onChange({ password: val })}
            label="Mot de passe"
            validation={{ type: 'mot de passe' }}
            obligatoire
          />

          <S.ConnexionAuto>
            <Icone
              icone="Checkbox"
              taille="extralarge"
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
