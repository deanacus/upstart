import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import Theme from '../Theme/Theme';

export const ThemeProvider = ({children}) => {
  return (
    <SCThemeProvider theme={Theme}>
      {children}
    </SCThemeProvider>
  )
}
