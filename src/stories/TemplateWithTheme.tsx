import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Transition } from '../Shared/css/pageStyles';
import themeClair from '../Shared/GlobalTheme/clair';
import themeSombre from '../Shared/GlobalTheme/sombre';

const SwitchCtn = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: 20px;
  left: 20px;
`;

const StoriesWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.body.normal};
  color: ${({ theme }) => theme.text.normal};
  ${Transition};
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

    a {
      text-decoration:none;
    }

    .sb-show-main.sb-main-centered #root{
      margin:0 ;
      padding:0 ;
      display:flex;
      flex-direction: center;
      align-items: center;
    }
  }`;

const TemplateWithTheme: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(themeClair);
  const changeTheme = () => {
    setTheme((c) => (c === themeClair ? themeSombre : themeClair));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles transition />
      <StoriesWrapper>
        {children}
        <SwitchCtn>
          <button type="button" onClick={changeTheme}>
            THEME
          </button>
        </SwitchCtn>
      </StoriesWrapper>
    </ThemeProvider>
  );
};

export default TemplateWithTheme;
