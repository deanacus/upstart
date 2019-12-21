import React from 'react';
import { css, createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import PropTypes from 'prop-types';

const GlobalStyleCSS = css`

  /* RESET... OF SORTS */
  html {
    font-size: 10px;
  }

  body {
    background: ${({theme}) => theme.colors.grey[50]};
    color: ${({theme}) => theme.colors.grey[900]};
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  *, * + * {
    box-sizing: border-box;
    text-decoration-skip-ink: auto;
  }

  /* GLOBAL TYPOGRAPHY */


  /* TODO: Get these values off a theme */
  body {
    color: #333;
    font-family: ${({theme}) => theme.fonts.body};
    font-size: ${({theme}) => theme.fontSizes[2]/10}rem;
  }

  h1 {
    font-size: ${({theme}) => theme.fontSizes[8]/10}rem;
    margin-top: 0;
  }

  h2 {
    font-size: ${({theme}) => theme.fontSizes[7]/10}rem;
    margin-top: 0;
  }

  h3 {
    font-size: ${({theme}) => theme.fontSizes[6]/10}rem;
    margin-top: 0;
  }

  h4 {
    font-size: ${({theme}) => theme.fontSizes[5]/10}rem;
    margin-top: 0;
  }

  h5 {
    font-size: ${({theme}) => theme.fontSizes[4]/10}rem;
    margin-top: 0;
  }

  h6 {
    font-size: ${({theme}) => theme.fontSizes[3]/10}rem;
    margin-top: 0;
  }

  p {
    margin-top: 0;
  }

  strong,
  b {
    font-weight: ${({theme}) => theme.fontWeights.bold};
  }

  em,
  i {
    font-style: italic;
  }

  a:link::not(.btn-link),
  a:visited::not(.btn-link) {
    color: ${({theme}) => theme.colors.primary[500]};
    text-decoration: none;
  }

  a:active::not(.btn-link) {
    color: ${({theme}) => theme.colors.primary[600]};
    text-decoration: underline;
  }

  a:hover::not(.btn-link),
  a:focus::not(.btn-link) {
    color: ${({theme}) => theme.colors.primary[700]};
    text-decoration: underline;
    outline: none;
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

export default Upstart;
