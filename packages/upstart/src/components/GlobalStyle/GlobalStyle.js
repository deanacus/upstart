import React from 'react';
import PropTypes from 'prop-types';
import { css, createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

import {
  getColor, getFontFamily, getFontSize, getFontWeight, getLineHeight, getPadding, getMargin,
} from '../../utils/styled-utils';

const GlobalStyleCSS = css`

  /* RESET... OF SORTS */
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    font-size: 10px;
  }

  body {
    background: ${getColor('background')};
    color: ${getColor('foreground')};
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  /* GLOBAL TYPOGRAPHY */


  /* TODO: Get these values off a theme */
  body {
    color: ${getColor('foreground')};
    ${getFontFamily('body')};
    ${getFontSize('base')};
    ${getLineHeight('body')}
    font-variant-ligatures: common-ligatures;
  }

  h1 {
    ${getFontSize('title')};
    ${getMargin('mb-3')};
    ${getMargin('mt-5')};
  }

  h2 {
    ${getFontSize('xxl')};
    ${getMargin('mb-3')};
    ${getMargin('mt-4')};
  }

  h3 {
    ${getFontSize('xl')};
    ${getMargin('mb-3')};
    ${getMargin('mt-4')};
  }

  h4 {
    ${getFontSize('lg')};
    ${getMargin('my-3')};
  }

  h5 {
    ${getFontSize('md')};
    ${getMargin('my-3')};
  }

  p {
    ${getMargin('my-3')};
  }

  strong,
  b {
    ${getFontWeight('bold')};
  }

  em,
  i {
    font-style: italic;
  }

  a:link:not(.btn-link),
  a:visited:not(.btn-link) {
    color: ${getColor('primary', 5)};
    text-decoration: none;
  }

  a:active:not(.btn-link) {
    color: ${getColor('primary', 6)};
    text-decoration: underline;
  }

  a:hover:not(.btn-link),
  a:focus:not(.btn-link) {
    color: ${getColor('primary', 7)};
    text-decoration: underline;
    outline: none;
  }

  table {
    border-collapse: collapse;
    max-width: 100%;
    width: 100%;
  }

  tr {
    border-bottom: 1px solid ${getColor('grey', 3)};
    max-width: 100%;
    width: 100%;
  }

  td {
    text-align: ${({ alignment }) => alignment};
    ${getPadding('py-2')};
  }

  thead {
    border-bottom: 2px solid ${getColor('grey', 4)};
    max-width: 100%;
    width: 100%;
  }

  th {
    font-weight: bold;
    text-align: ${({ alignment }) => alignment};
    ${getPadding('py-2')};
  }

`;

const GlobalStyles = createGlobalStyle`${GlobalStyleCSS}`;

export const Upstart = ({ children }) => (
  <ThemeProvider>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

Upstart.propTypes = {
  /** The actual application components to receive the ThemeProvider and GlobalsStyles */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Upstart;
