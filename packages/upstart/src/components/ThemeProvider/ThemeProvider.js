import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { Theme } from '../Theme/Theme';

export const ThemeProvider = ({ children }) => (
  <SCThemeProvider theme={Theme}>
    {children}
  </SCThemeProvider>
);

ThemeProvider.propTypes = {
  /** The children of the ThemeProvider */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ThemeProvider;
