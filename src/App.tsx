import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';
import { ApolloProvider } from '@apollo/client';
import useModeSombre from './CustomHooks/useModeSombre';
import Navigation from './Pages/Navigation/Navigation';
import GlobalStyles from './Shared/GlobalTheme/GlobalStyles';
import LienAccueil from './UI/LienAccueil/LienAccueil';
import SwitchMode from './UI/SwitchMode/SwitchMode';
import client from './Shared/Apollo/client';

const App = () => {
  const [theme, changeMode] = useModeSombre();
  const [firstLoad, setFirstLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setFirstLoad(false);
  }, []);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <RecoilNexus />
          <GlobalStyles transition={!firstLoad} />
          <Navigation />
          {location.pathname !== '/' && <LienAccueil theme={theme} />}
          <SwitchMode onClick={changeMode} theme={theme} />
        </RecoilRoot>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
