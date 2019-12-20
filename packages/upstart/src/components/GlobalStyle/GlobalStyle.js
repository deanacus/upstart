import React from 'react';
import { css, createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

import { upstartProps } from '../../propTypes';

const GlobalStyleCSS = css`

  /* RESET... OF SORTS */
  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  *, * + * {
    box-sizing: border-box;
  }

  /* GLOBAL TYPOGRAPHY */


  /* TODO: Get these values off a theme */
  body {
    color: #333;
    font-family: ${({theme}) => theme.fonts.sans};
    font-size: ${({theme}) => theme.fontSizes.body.md/10}rem;
  }

  h1 {
    font-size: 9.6rem;
    margin-top: 0;
  }

  h2 {
    font-size: 6.0rem;
    margin-top: 0;
  }

  h3 {
    font-size: 4.8rem;
    margin-top: 0;
  }

  h4 {
    font-size: 3.4rem;
    margin-top: 0;
  }

  h5 {
    font-size: 2.4rem;
    margin-top: 0;
  }

  h6 {
    font-size: 2.0rem;
    margin-top: 0;
  }

  p {
    margin-top: 0;
  }

  strong,
  b {
    font-weight: bold;
  }

  em,
  i {
    font-style: italic;
  }

`;

const GlobalStyles = createGlobalStyle`${GlobalStyleCSS}`

export const Upstart = ({children}) => (
  <ThemeProvider>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

Upstart.propTypes = {
  /** The actual application components to receive the ThemeProvider and GlobalsStyles */
  children: upstartProps.shared.children,
}

export default Upstart;
