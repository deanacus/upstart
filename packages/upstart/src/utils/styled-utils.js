import { useTheme } from '../hooks/useTheme'

const theme = useTheme();

const getUnit = (value) => {
  switch (theme.preferredUnit) {
    case 'rem':
      return `${value / theme.rootVal}rem`;
    case 'px':
    default:
      return `${value}px`;
  }
}

export const space = (alias) => {
  const [key, index] = alias.split('-');
  const propID = key.charAt(0)
  const prop = propID === 'm' ? 'margin' : 'padding';

  if ( index > 4 ) {
    console.warn(`Requesting ${key} will result in a very large amount of ${prop}`);
  }

  switch (key) {
    case `${propID}`:
      return `${prop}: ${theme.space[index] / theme.rootVal}rem;`;
    case `${propID}x`:
      return `
        ${prop}-right: ${theme.space[index] / theme.rootVal}rem;
        ${prop}-left: ${theme.space[index] / theme.rootVal}rem;
      `;
    case `${propID}y`:
      return `
        ${prop}-top: ${theme.space[index] / theme.rootVal}rem;
        ${prop}-bottom: ${theme.space[index] / theme.rootVal}rem;
      `;
    case `${propID}t`:
      return `${prop}-top: ${theme.space[index] / theme.rootVal}rem;`;
    case `${propID}r`:
      return `${prop}-right: ${theme.space[index] / theme.rootVal}rem;`;
    case `${propID}b`:
      return `${prop}-bottom: ${theme.space[index] / theme.rootVal}rem;`;
    case `${propID}l`:
      return `${prop}-left: ${theme.space[index] / theme.rootVal}rem;`;
    default:
      return null;
  }
}

export const fontFamily = (family) => `font-family: ${theme.fonts[family]}`;

export const fontSize = (size) => `font-size: ${getUnit(theme.fontSizes[size])}`

export const fontWeight = (weight) => `font-weight: ${theme.fontWeights[weight]}`;

export const lineHeight = (height) => `line-height: ${theme.lineHeights[height]}`;

export const color = (color, strength = 500) => theme.colors[color][strength];

export const width = (width) => getUnit(theme.widths[width]);

export const breakpoint = (bp) => getUnit(theme.breakpoints[bp]);

export const border = (border) => theme.borders[border];

export const borderWidth = (width) => getUnit(theme.borderWidths[width]);

export const borderStyle = (style) => theme.borderStyles[style];

export const mq = (size, content) => `@media (min-width: ${getUnit(theme.breakpoints[size])}) {
  ${content}
}`

export const radius = (rad) => getUnit(theme.radii[rad]);

export const elevation = (layer) => theme.zIndices[layer];

export const shadow = (type) => theme.shadows[type];