import { createGlobalStyle } from 'styled-components';
import '@fontsource/oswald/latin.css';
import '@fontsource/roboto/latin.css';

const GlobalStyles = createGlobalStyle<{ transition: boolean }>`
  html,body,#root {
    padding: 0;
    margin: 0;
    height:100%;
    width:100%;
    background-color: ${({ theme }) => theme.body.normal};
    color: ${({ theme }) => theme.text.normal};
    transition: ${({ transition }) =>
      transition
        ? 'background-color 500ms, color 500ms, border-color 500ms'
        : 'none'} ;
    font-family: "Roboto";
    font-size: 16px;

    input {
    font-family: "Roboto";
    }
  }`;

export default GlobalStyles;
