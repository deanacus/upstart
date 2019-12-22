import React from 'react';
import { css, createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import PropTypes from 'prop-types';

import { color, fontFamily, fontSize, fontWeight } from '../../utils/styled-utils'

const GlobalStyleCSS = css`

  /* RESET... OF SORTS */
  html {
    font-size: 10px;
  }

  body {
    background: ${color('grey', 50)};
    color: ${color('grey', 900)};
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
    ${fontFamily('body')};
    ${fontSize('base')};
  }

  h1 {
    ${fontSize('display')};
    margin-top: 0;
  }

  h2 {
    ${fontSize('title')};
    margin-top: 0;
  }

  h3 {
    ${fontSize('xxl')};
    margin-top: 0;
  }

  h4 {
    ${fontSize('xl')};
    margin-top: 0;
  }

  h5 {
    ${fontSize('lg')};
    margin-top: 0;
  }

  h6 {
    ${fontSize('md')};
    margin-top: 0;
  }

  p {
    margin-top: 0;
  }

  strong,
  b {
    ${fontWeight('bold')};
  }

  em,
  i {
    font-style: italic;
  }

  a:link:not(.btn-link),
  a:visited:not(.btn-link) {
    color: ${color('primary', 500)};
    text-decoration: none;
  }

  a:active:not(.btn-link) {
    color: ${color('primary', 600)};
    text-decoration: underline;
  }

  a:hover:not(.btn-link),
  a:focus:not(.btn-link) {
    color: ${color('primary', 700)};
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
