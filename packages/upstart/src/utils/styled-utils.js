import { Theme } from '../components/Theme/Theme';

const justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  left: 'left',
  right: 'right',
}

const alignmentMap = {
  stretch:'stretch',
  start:'flex-start',
  end:'flex-end',
  center:'center',
  baseline:'baseline'
};

const getUnit = (value) => {
  switch (Theme.preferredUnit) {
    case 'rem':
      return `${value / Theme.rootVal}rem`;
    case 'px':
    default:
      return `${value}px`;
  }
}

export const space = (alias) => getUnit(Theme.space[alias]);

export const spacing = (alias) => {
  const [key, index] = alias.split('-');
  const propID = key.charAt(0)
  const prop = propID === 'm' ? 'margin' : 'padding';

  if ( index > 4 ) {
    console.warn(`Requesting ${key} will result in a very large amount of ${prop}`);
  }

  switch (key) {
    case `${propID}`:
      return `${prop}: ${Theme.space[index] / Theme.rootVal}rem;`;
    case `${propID}x`:
      return `
        ${prop}-right: ${Theme.space[index] / Theme.rootVal}rem;
        ${prop}-left: ${Theme.space[index] / Theme.rootVal}rem;
      `;
    case `${propID}y`:
      return `
        ${prop}-top: ${Theme.space[index] / Theme.rootVal}rem;
        ${prop}-bottom: ${Theme.space[index] / Theme.rootVal}rem;
      `;
    case `${propID}t`:
      return `${prop}-top: ${Theme.space[index] / Theme.rootVal}rem;`;
    case `${propID}r`:
      return `${prop}-right: ${Theme.space[index] / Theme.rootVal}rem;`;
    case `${propID}b`:
      return `${prop}-bottom: ${Theme.space[index] / Theme.rootVal}rem;`;
    case `${propID}l`:
      return `${prop}-left: ${Theme.space[index] / Theme.rootVal}rem;`;
    default:
      return null;
  }
}

export const padding = (alias) => spacing(alias);

export const margin = (alias) => spacing(alias);

export const fontFamily = (family) => `font-family: ${Theme.fonts[family]}`;

export const fontSize = (size) => `font-size: ${getUnit(Theme.fontSizes[size])}`

export const fontWeight = (weight) => `font-weight: ${Theme.fontWeights[weight]}`;

export const lineHeight = (height) => `line-height: ${Theme.lineHeights[height]}`;

export const color = (color, strength) => Theme.colors[color][strength] || Theme.colors[color];

export const alignItems = (align) => `align-items: ${alignmentMap[align]}`;

export const alignContent = (align) => `align-content: ${alignmentMap[align]}`;

export const justifyContent = (justify) => `justify-content: ${justifyMap[justify]}`;

export const width = (width) => getUnit(Theme.widths[width]);

export const breakpoint = (bp) => getUnit(Theme.breakpoints[bp]);

export const border = (border) => Theme.borders[border];

export const borderWidth = (width) => getUnit(Theme.borderWidths[width]);

export const borderStyle = (style) => Theme.borderStyles[style];

export const mq = (size, content) => `@media (min-width: ${getUnit(Theme.breakpoints[size])}) {
  ${content}
}`

export const radius = (rad) => getUnit(Theme.radii[rad]);

export const elevation = (layer) => Theme.zIndices[layer];

export const shadow = (type) => Theme.shadows[type];

const styledUtils = {
  space,
  padding,
  margin,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  alignItems,
  alignContent,
  justifyContent,
  width,
  breakpoint,
  border,
  borderWidth,
  borderStyle,
  mq,
  radius,
  elevation,
  shadow,
};

export default styledUtils;
