import { useApolloClient } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import {
  useAddUserMutation,
  useGetUsersSubSubscription,
  useUpdateUserPseudoMutation,
} from '../../../generated/graphql';
import jwt_token from '../../../State/Token';
import * as S from './Utilisateurs.styled';

interface UtilisateursProps {
  userId: number | null;
  setUserId: (val: number) => void;
}
const Utilisateurs = ({ userId, setUserId }: UtilisateursProps) => {
  const token = useRecoilValue(jwt_token);
  const [o, oo] = useState(true);
  const { data, error } = useGetUsersSubSubscription({
    shouldResubscribe: (e) => {
      console.log(e);
      return true;
    },
  });
  const [addUtilisateur] = useAddUserMutation();
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [updateUserPseudo] = useUpdateUserPseudoMutation();

  useEffect(() => {
    console.log(data, error, token);
    if (data) {
      oo(false);
    }
  });
  return (
    <S.UtilisateursGlobal>
      <S.UtilisateursCtn>
        <S.Titre>Choix de l&apos;utilisateur</S.Titre>
        <S.ListeUtilisateursCtn>
          {data &&
            data.utilisateur.map((user) => (
              <S.UtilisateurCtn
                key={user.id}
                isSelected={user.id === userId}
                onClick={() => setUserId(user.id)}
              >
                <S.PuceUtilisateur />
                {isEditing !== user.id && (
                  <S.NomUtilisateur onDoubleClick={() => setIsEditing(user.id)}>
                    {user.pseudonyme}
                  </S.NomUtilisateur>
                )}
                {isEditing === user.id && (
                  <S.NomUtilisateurEdit
                    defaultValue={user.pseudonyme}
                    onBlur={(e) => {
                      updateUserPseudo({
                        variables: { userId: user.id, pseudo: e.target.value },
                      });
                      setIsEditing(null);
                    }}
                  />
                )}
              </S.UtilisateurCtn>
            ))}
        </S.ListeUtilisateursCtn>
        <S.BoutonAddUtilisateur
          onClick={() => addUtilisateur({ variables: { pseudo: 'Nouveau' } })}
        >
          Nouvel utilisateur
        </S.BoutonAddUtilisateur>
      </S.UtilisateursCtn>
    </S.UtilisateursGlobal>
  );
};

export default Utilisateurs;
