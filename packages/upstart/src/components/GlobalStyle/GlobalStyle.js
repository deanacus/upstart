import React from 'react';
import PropTypes from 'prop-types';
import { css, createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

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
    font-size: ${({ theme }) => getRem(theme.fontSizes.base, theme.rootVal)};
    line-height: ${({ theme }) => theme.lineHeights.body};
    font-variant-ligatures: common-ligatures;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => getRem(theme.fontSizes.title, theme.rootVal)};
    ${({ theme }) => getMargin('mb-3', theme)};
    ${({ theme }) => getMargin('mt-5', theme)};
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => getRem(theme.fontSizes.xxl, theme.rootVal)};
    ${({ theme }) => getMargin('mb-3', theme)};
    ${({ theme }) => getMargin('mt-4', theme)};
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => getRem(theme.fontSizes.xl, theme.rootVal)};
    ${({ theme }) => getMargin('mb-3', theme)};
    ${({ theme }) => getMargin('mt-4', theme)};
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => getRem(theme.fontSizes.lg, theme.rootVal)};
    ${({ theme }) => getMargin('my-3', theme)};
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => getRem(theme.fontSizes.md, theme.rootVal)};
    ${({ theme }) => getMargin('my-3', theme)};
  }

  p {
    ${({ theme }) => getMargin('my-3', theme)};
  }

  strong,
  b {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
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

const GlobalStyles = createGlobalStyle`${GlobalStyleCSS}`;

export const Upstart = ({ children, customTheme }) => (
  <ThemeProvider customTheme={customTheme}>
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

  /** The customTheme object to pass to the theme provider */
  customTheme: PropTypes.shape({
    /** The root value you base any rem values off */
    rootVal: PropTypes.number,


    /** The various font-stacks to be used throughout your theme */
    fonts: PropTypes.shape({
      body: PropTypes.string,
      heading: PropTypes.string,
      monospace: PropTypes.string,
    }),


    /** The various sizes of type (in pixels) to be used throughout your theme */
    fontSizes: PropTypes.arrayOf(PropTypes.number),


    /** The array of CSS font-weights to be used throughout your theme */
    fontWeights: PropTypes.arrayOf(PropTypes.number),


    /** THe various type face imports you would like to use in your font-stacks */
    typeFaces: PropTypes.shape({

      /** The primary typeface for your theme. Generally used for body text */
      primary: PropTypes.arrayOf(PropTypes.string),

      /** The secondary typeface for your theme. Generally used for headings, etc. */
      secondary: PropTypes.arrayOf(PropTypes.string),
    }),


    /** The various line-heights to use for type throughout your theme */
    lineHeights: PropTypes.shape({ body: PropTypes.number, heading: PropTypes.number }),


    /** The colors used throughout your theme */
    colors: PropTypes.shape({

      /** The primarys color to be used in your theme */
      primary: PropTypes.arrayOf(PropTypes.string),

      /** The secondary colors to be used in your theme */
      secondary: PropTypes.arrayOf(PropTypes.string),

      /** The success colors used in your theme */
      success: PropTypes.arrayOf(PropTypes.string),

      /** The error colors used in your theme */
      error: PropTypes.arrayOf(PropTypes.string),

      /** The warning colors used in your theme */
      warning: PropTypes.arrayOf(PropTypes.string),

      /** The grey colors used in your theme */
      grey: PropTypes.arrayOf(PropTypes.string),

      /** The foreground or text color used in your theme */
      foreground: PropTypes.string,

      /** The background color used in your theme */
      background: PropTypes.string,
    }),

    widths: PropTypes.arrayOf(PropTypes.number),

    /** The min-width and max-width values (in pixels) to be used in media-queries */
    breakpoints: PropTypes.arrayOf(PropTypes.number),

    /** The border-style values you would like to make available in your theme */
    borders: PropTypes.arrayOf(PropTypes.string),

    /** The border-width values (in pixels) you would like to make available in your theme */
    borderWidths: PropTypes.arrayOf(PropTypes.number),

    /** The border-radius values (in pixels) you would like to make available in your theme */
    radii: PropTypes.arrayOf(PropTypes.number),

    /** The z-index values you would like to make available in your theme */
    zIndices: PropTypes.arrayOf(PropTypes.number),

    /** The box-shaddow and border-shadow values you would like to make available in your theme */
    shadows: PropTypes.arrayOf(PropTypes.string),

    /** The spacing values (in pixels) you would like to make available in your theme.
     * Used by things like margins, paddings, etc.
     */
    space: PropTypes.arrayOf(PropTypes.number),

    /** Any specific component variants you would like to make available in your theme */
    variants: PropTypes.shape({}),
  }),
};

Upstart.defaultProps = {
  customTheme: null,
};

export default Upstart;
