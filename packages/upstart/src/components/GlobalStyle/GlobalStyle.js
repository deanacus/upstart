import { css, createGlobalStyle } from 'styled-components';

import { getPadding, getMargin, getRem } from '../../utils/styled-utils';

const GlobalStyleCSS = css`

  /* RESET... OF SORTS */
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    font-size: ${({ theme }) => theme.rootVal}px;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  /* GLOBAL TYPOGRAPHY */


  /* TODO: Get these values off a theme */
  body {
    color: ${({ theme }) => theme.colors.foreground};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => getRem(theme.fontSize.base, theme.rootVal)};
    line-height: ${({ theme }) => theme.lineHeights.body};
    font-variant-ligatures: common-ligatures;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => getRem(theme.fontSize.title, theme.rootVal)};
    ${({ theme }) => getMargin('mb-3', theme)};
    ${({ theme }) => getMargin('mt-5', theme)};
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => getRem(theme.fontSize.xxl, theme.rootVal)};
    ${({ theme }) => getMargin('mb-3', theme)};
    ${({ theme }) => getMargin('mt-4', theme)};
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => getRem(theme.fontSize.xl, theme.rootVal)};
    ${({ theme }) => getMargin('mb-3', theme)};
    ${({ theme }) => getMargin('mt-4', theme)};
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => getRem(theme.fontSize.lg, theme.rootVal)};
    ${({ theme }) => getMargin('my-3', theme)};
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => getRem(theme.fontSize.md, theme.rootVal)};
    ${({ theme }) => getMargin('my-3', theme)};
  }

  p {
    ${({ theme }) => getMargin('my-3', theme)};
  }

  strong,
  b {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  em,
  i {
    font-style: italic;
  }

  a:link:not(.btn-link),
  a:visited:not(.btn-link) {
    color: ${({ theme }) => theme.colors.primary[5]};
    text-decoration: none;
  }

  a:active:not(.btn-link) {
    color: ${({ theme }) => theme.colors.primary[6]};
    text-decoration: underline;
  }

  a:hover:not(.btn-link),
  a:focus:not(.btn-link) {
    color: ${({ theme }) => theme.colors.primary[7]};
    text-decoration: underline;
    outline: none;
  }

  table {
    border-collapse: collapse;
    max-width: 100%;
    width: 100%;
  }

  thead {
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey[4]};
    max-width: 100%;
    width: 100%;
  }

  th {
    font-weight: bold;
    text-align: left;
    ${({ theme }) => getPadding('py-2', theme)};
  }

  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey[3]};
    max-width: 100%;
    width: 100%;
  }

  td {
    text-align: left;
    ${({ theme }) => getPadding('py-2', theme)};
  }

`;

export const GlobalStyle = createGlobalStyle`${GlobalStyleCSS}`;

export default GlobalStyle;
