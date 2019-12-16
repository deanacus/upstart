const space = {
  xs: 8,
  s: 16,
  m: 24,
  l: 32,
  xl: 40,
  xxl: 48,
  xxxl: 54,
  xxxxl: 62,
};

const fonts = {
  serif: '',
  sans: 'Lato, system-ui, sans-serif',
  monospace: 'Menlo, monospace',
  body: '',
  heading: 'inherit',
};

const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700,
};

const fontSizes = {
  body: {
    xs: 12,
    s: 14,
    m: 16,
    l: 20,
    xl: 24,
  },
  heading: {
    xs: 32,
    s: 48,
    m: 64,
    l: 96,
    xl: 144,
  },
};

const lineHeights = {
  body: 1.5,
  heading: 1.125,
};

const colors = {
  black: '#191919',
  white: '#fcfcfc',
  grey: {
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#262626',
  },
  primary: {
    200: '#bce8f6',
    300: '#8fd9f0',
    400: '#62caea',
    500: '#35bbe3',
    600: '#1ca1ca',
    700: '#157e9d',
    800: '#0f5a70',
  },
  secondary: {
    200: '#cae7d3',
    300: '#a7d7b5',
    400: '#84c798',
    500: '#61b87a',
    600: '#479e60',
    700: '#387b4b',
    800: '#285836',
  },
  success: '',
  info: '',
  warning: '',
  danger: '',
};

const radii = {
  s: 3,
  m: 5,
  l: 7,
}

const breakpoints = {
  xxs: 320,
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440,
  xxl: 1680,
  xxxl: 1920,
}

export const theme = {
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  breakpoints,
  radii,
}

export default theme