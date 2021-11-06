import { createGlobalStyle } from 'styled-components';
import '@fontsource/oswald/latin.css';

const GlobalStyles = createGlobalStyle`
  html,body,#root {
    padding: 0;
    margin: 0;
    height:100%;
    width:100%;
    background-color: ${({ theme }) => theme.body.normal};
    color: ${({ theme }) => theme.text.normal};
    transition: background-color 500ms, color 500ms, border-color 500ms;
    font-family: "Oswald";
    font-size: 16px;
  }`;

export default GlobalStyles;
