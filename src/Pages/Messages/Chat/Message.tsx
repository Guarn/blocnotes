import * as S from './Message.styled';

interface MessageProps {
  pseudo: string;
  updatedAt: string;
  contenu: string;
  leftSide: boolean;
}
const Message = ({ contenu, pseudo, updatedAt, leftSide }: MessageProps) => (
  <S.MessageGlobal leftSide={leftSide}>
    <S.InfosCtn>
      <S.UtilisateurCtn>
        <S.PuceUtilisateur />
        <S.NomUtilisateur>{pseudo}</S.NomUtilisateur>
      </S.UtilisateurCtn>
      <S.Updated>{updatedAt}</S.Updated>
    </S.InfosCtn>
    <S.MessageCtn>{contenu}</S.MessageCtn>
  </S.MessageGlobal>
);

export default Message;
