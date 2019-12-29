import React from 'react';
import { css, createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import PropTypes from 'prop-types';

import { color, fontFamily, fontSize, fontWeight, lineHeight, padding, margin } from '../../utils/styled-utils'

const GlobalStyleCSS = css`

  /* RESET... OF SORTS */
  *, * + * {
    box-sizing: border-box;
    text-decoration-skip-ink: auto;
  }

  html {
    font-size: 10px;
  }

  body {
    background: ${color('background')};
    color: ${color('foreground')};
    ${lineHeight('body')}
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  /* GLOBAL TYPOGRAPHY */


  /* TODO: Get these values off a theme */
  body {
    color: #333;
    ${fontFamily('body')};
    ${fontSize('base')};
    font-variant-ligatures: common-ligatures;
  }

  h1 {
    ${fontSize('title')};
    ${margin('mb-3')};
    ${margin('mt-5')};
  }

  h2 {
    ${fontSize('xxl')};
    ${margin('mb-3')};
    ${margin('mt-4')};
  }

  h3 {
    ${fontSize('xl')};
    ${margin('mb-3')};
    ${margin('mt-4')};
  }

  h4 {
    ${fontSize('lg')};
    ${margin('my-3')};
  }

  h5 {
    ${fontSize('md')};
    ${margin('my-3')};
  }

  p {
    ${margin('my-3')};
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
    color: ${color('primary', 5)};
    text-decoration: none;
  }

  a:active:not(.btn-link) {
    color: ${color('primary', 6)};
    text-decoration: underline;
  }

  a:hover:not(.btn-link),
  a:focus:not(.btn-link) {
    color: ${color('primary', 7)};
    text-decoration: underline;
    outline: none;
  }

  table {
    border-collapse: collapse;
    max-width: 100%;
    width: 100%;
  }

  tr {
    border-bottom: 1px solid ${color('grey', 3)};
    max-width: 100%;
    width: 100%;
  }

  td {
    text-align: ${({alignment}) => alignment};
    ${padding('py-2')};
  }

  thead {
    border-bottom: 2px solid ${color('grey', 4)};
    max-width: 100%;
    width: 100%;
  }

  th {
    font-weight: bold;
    text-align: ${({alignment}) => alignment};
    ${padding('py-2')};
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
