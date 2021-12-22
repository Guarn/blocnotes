import * as S from './Validation.styled';

interface ValidationProps {
  erreurs: string[];
}

const Validation = ({ erreurs }: ValidationProps) => (
  <S.ValidationGlobal>
    {erreurs.map((error, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <S.ErrorCtn key={i}>{error}</S.ErrorCtn>
    ))}
  </S.ValidationGlobal>
);

export default Validation;
