import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './Theme';

export const UpstartTheme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default UpstartTheme;
