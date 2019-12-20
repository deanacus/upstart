const rootVal = 10;

const space = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48,
  xxxl: 54,
  xxxxl: 62,
};

const spaceArr = [
  8,
  16,
  24,
  32,
  40,
  48,
  54,
  62,
];

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
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  heading: {
    xs: 32,
    sm: 48,
    md: 64,
    lg: 96,
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
  sm: 3,
  md: 5,
  lg: 7,
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

const widths = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1440,
  xxxl: 1680,
}

const mediaQueries = (size, content) => `@media (min-width: ${breakpoints[size]}) {
  ${content}
}`

const getSpacing = (spaceString) => {
  const [axis, index] = spaceString.split('-');
  const cssKey = axis.charAt(0) === 'm' ? 'margin' : 'padding';

  switch (axis) {
    case 'm':
    case 'p':
      return `${cssKey}: ${spaceArr[index]/rootVal}rem;`;
    case 'mx':
    case 'px':
      return `
        ${cssKey}-right: ${spaceArr[index]/rootVal}rem;
        ${cssKey}-left: ${spaceArr[index]/rootVal}rem;
      `;
    case 'my':
    case 'py':
      return `
        ${cssKey}-top: ${spaceArr[index]/rootVal}rem;
        ${cssKey}-bottom: ${spaceArr[index]/rootVal}rem;
      `;
    case 'mt':
    case 'pt':
      return `${cssKey}-top: ${spaceArr[index]/rootVal}rem;`;
    case 'mr':
    case 'pr':
      return `${cssKey}-right: ${spaceArr[index]/rootVal}rem;`;
    case 'mb':
    case 'pb':
      return `${cssKey}-bottom: ${spaceArr[index]/rootVal}rem;`;
    case 'ml':
    case 'pl':
      return `${cssKey}-left: ${spaceArr[index]/rootVal}rem;`;
    default:
      return null;
  }
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
  widths,
  utils: {
    getSpacing,
    mediaQueries,
  }
}

export default theme