import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../Theme/Theme';

export const UpstartTheme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
