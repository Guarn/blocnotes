import { useState } from 'react';
import themeClair from '../Shared/GlobalTheme/clair';
import { Theme } from '../Shared/GlobalTheme/interface';
import themeSombre from '../Shared/GlobalTheme/sombre';

const useModeSombre = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(themeClair);

  const changeMode = () => {
    setTheme((oldTheme) =>
      oldTheme === themeSombre ? themeClair : themeSombre
    );
  };

  return [theme, changeMode];
};

export default useModeSombre;
