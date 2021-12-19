import { useState } from 'react';

import {
  useAddUserMutation,
  useGetUsersSubSubscription,
  useUpdateUserPseudoMutation,
} from '../../../generated/graphql';
import * as S from './Utilisateurs.styled';

interface UtilisateursProps {
  userId: number | null;
  setUserId: (val: number) => void;
}
const Utilisateurs = ({ userId, setUserId }: UtilisateursProps) => {
  const { data } = useGetUsersSubSubscription();
  const [addUtilisateur] = useAddUserMutation();
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [updateUserPseudo] = useUpdateUserPseudoMutation();

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
