import { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import themeClair from '../Shared/GlobalTheme/clair';
import themeSombre from '../Shared/GlobalTheme/sombre';

const useModeSombre = (): [DefaultTheme, () => void] => {
  const [theme, setTheme] = useState<DefaultTheme>(themeSombre);

  const changeMode = () => {
    setTheme((oldTheme) =>
      oldTheme === themeSombre ? themeClair : themeSombre
    );
  };

  return [theme, changeMode];
};

export default useModeSombre;
