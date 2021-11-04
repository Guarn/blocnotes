import { ThemeProvider } from 'styled-components';
import useModeSombre from './CustomHooks/useModeSombre';
import Accueil from './Pages/Accueil/Accueil';
import GlobalStyles from './Shared/GlobalTheme/GlobalStyles';

const App = () => {
  const [theme, changeMode] = useModeSombre();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button type="submit" onClick={changeMode}>
        test
      </button>
      COUCOU
      <Accueil />
    </ThemeProvider>
  );
};

export default App;
