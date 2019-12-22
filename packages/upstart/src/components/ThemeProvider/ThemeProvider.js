import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import theme from '../Theme/Theme';

export const ThemeProvider = ({children}) => {
  return (
    <SCThemeProvider theme={theme}>
      {children}
    </SCThemeProvider>
  )
}
