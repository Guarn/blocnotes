import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import useModeSombre from './CustomHooks/useModeSombre';
import GlobalStyles from './Shared/GlobalTheme/GlobalStyles';
import SwitchMode from './UI/SwitchMode/SwitchMode';
import Contact from './Pages/Seb/Contact';

const App = () => {
  const [theme, changeMode] = useModeSombre();
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    setFirstLoad(false);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles transition={!firstLoad} />
      <SwitchMode onClick={changeMode} theme={theme} />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
