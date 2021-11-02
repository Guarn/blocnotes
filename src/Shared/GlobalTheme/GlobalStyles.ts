import { createGlobalStyle } from 'styled-components';
import { Theme } from './interface';

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  html,body,#root {
    padding: 0;
    margin: 0;
    height:100%;
    width:100%;
    background-color: ${({ theme }) => theme.body.normal};
    color: ${({ theme }) => theme.text.normal};
    transition: background-color 500ms, color 500ms, border-color 500ms;
  }`;

export default GlobalStyles;
