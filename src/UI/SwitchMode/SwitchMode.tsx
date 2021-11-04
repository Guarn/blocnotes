import React from 'react';
import useModeSombre from '../../CustomHooks/useModeSombre';
import * as S from './SwitchMode.styled';

const SwitchMode = () => {
  const [theme, ChangeTheme] = useModeSombre();
  return <S.SwitchModeGlobal></S.SwitchModeGlobal>;
};

export default SwitchMode;
