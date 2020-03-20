import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

export const UpstartProvider = ({ children, customTheme }) => (
  <ThemeProvider customTheme={customTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

UpstartProvider.propTypes = {
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
    fontSize: PropTypes.arrayOf(PropTypes.number),


    /** The array of CSS font-weights to be used throughout your theme */
    fontWeight: PropTypes.arrayOf(PropTypes.number),


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

    width: PropTypes.arrayOf(PropTypes.number),

    /** The min-width and max-width values (in pixels) to be used in media-queries */
    breakpoints: PropTypes.arrayOf(PropTypes.number),

    /** The border-style values you would like to make available in your theme */
    borders: PropTypes.arrayOf(PropTypes.string),

    /** The border-width values (in pixels) you would like to make available in your theme */
    borderWidth: PropTypes.arrayOf(PropTypes.number),

    /** The border-radius values (in pixels) you would like to make available in your theme */
    borderRadius: PropTypes.arrayOf(PropTypes.number),

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

UpstartProvider.defaultProps = {
  customTheme: null,
};

export default UpstartProvider;
