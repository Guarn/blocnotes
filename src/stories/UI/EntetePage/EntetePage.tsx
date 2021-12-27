import React from 'react';
import * as S from './EntetePage.styled';

const EntetePage: React.FC = ({ children }) => (
  <S.EntetePageGlobal>{children}</S.EntetePageGlobal>
);

export default EntetePage;
