import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';
import { ApolloProvider } from '@apollo/client';
import useModeSombre from './CustomHooks/useModeSombre';
import Navigation from './Pages/Navigation/Navigation';
import GlobalStyles from './Shared/GlobalTheme/GlobalStyles';
import LienAccueil from './UI/BtnRetourAccueil/BtnRetourAccueil';
import BtnModeSombre from './UI/BtnModeSombre/BtnModeSombre';
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
          {location.pathname !== '/' && location.pathname !== '/connexion' && (
            <LienAccueil />
          )}
          <BtnModeSombre onClick={changeMode} />
        </RecoilRoot>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
