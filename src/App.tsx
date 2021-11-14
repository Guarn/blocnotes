import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useModeSombre from './CustomHooks/useModeSombre';
import Navigation from './Pages/Navigation/Navigation';
import GlobalStyles from './Shared/GlobalTheme/GlobalStyles';
import LienAccueil from './UI/LienAccueil/LienAccueil';
import SwitchMode from './UI/SwitchMode/SwitchMode';

const App = () => {
  const [theme, changeMode] = useModeSombre();
  const [firstLoad, setFirstLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setFirstLoad(false);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles transition={!firstLoad} />
      <Navigation />
      {location.pathname !== '/' && <LienAccueil theme={theme} />}
      <SwitchMode onClick={changeMode} theme={theme} />
    </ThemeProvider>
  );
};

export default App;
