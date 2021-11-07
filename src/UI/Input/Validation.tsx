import checkString from '../../Utils/stringValidation';
import { StringValidationOptions } from '../../Utils/stringValidation/interfaces';
import * as S from './Validation.styled';

interface ValidationProps {
  valeur: string;
  options: StringValidationOptions;
}
const Validation = ({ valeur, options }: ValidationProps) => {
  const check = checkString({ valeur, options });

  return (
    <S.ValidationGlobal>
      {!check.isValid &&
        check.errors.map((error, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <S.ErrorCtn key={i}>{error}</S.ErrorCtn>
        ))}
    </S.ValidationGlobal>
  );
};

export default Validation;
