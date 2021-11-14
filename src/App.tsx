import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import useModeSombre from './CustomHooks/useModeSombre';
import Accueil from './Pages/Accueil/Accueil';
import GlobalStyles from './Shared/GlobalTheme/GlobalStyles';
import SwitchMode from './UI/SwitchMode/SwitchMode';

const App = () => {
  const [theme, changeMode] = useModeSombre();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles transition={!isFirstLoad} />
      <Accueil />
      <SwitchMode onClick={changeMode} theme={theme} />
    </ThemeProvider>
  );
};

export default App;
