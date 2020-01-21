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
};

const alignmentMap = {
  stretch: 'stretch',
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
};

const getUnit = (value) => {
  switch (Theme.preferredUnit) {
    case 'rem':
      return `${value / Theme.rootVal}rem`;
    case 'px':
    default:
      return `${value}px`;
  }
};

export const space = (alias) => getUnit(Theme.space[alias]);

export const getSpacing = (alias) => {
  const [key, index] = alias.split('-');
  const propID = key.charAt(0);
  const prop = propID === 'm' ? 'margin' : 'padding';

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
};

export const getPadding = (alias) => getSpacing(alias);

export const getMargin = (alias) => getSpacing(alias);

export const getFontFamily = (family) => `font-family: ${Theme.fonts[family]}`;

export const getFontSize = (size) => `font-size: ${getUnit(Theme.fontSizes[size])}`;

export const getFontWeight = (weight) => `font-weight: ${Theme.fontWeights[weight]}`;

export const getLineHeight = (height) => `line-height: ${Theme.lineHeights[height]}`;

export const getColor = (name, strength) => Theme.colors[name][strength] || Theme.colors[name];

export const alignItems = (align) => `align-items: ${alignmentMap[align]}`;

export const alignContent = (align) => `align-content: ${alignmentMap[align]}`;

export const justifyContent = (justify) => `justify-content: ${justifyMap[justify]}`;

export const getWidth = (widthIndex) => getUnit(Theme.widths[widthIndex]);

export const getBreakpoint = (bp) => getUnit(Theme.breakpoints[bp]);

export const getBorder = (borderIndex) => Theme.borders[borderIndex];

export const getBorderFromString = (alias) => {
  const [key, index] = alias.split('-');

  switch (key) {
    case 'b':
      return `border: ${Theme.borders[index]}`;
    case 'bx':
      return `
        border-right: ${Theme.border[index]};
        border-left: ${Theme.border[index]};
      `;
    case 'by':
      return `
        border-top: ${Theme.border[index]};
        border-bottom: ${Theme.border[index]};
      `;
    case 'bt':
      return `border-top: ${Theme.border[index]};`;
    case 'br':
      return `border-right: ${Theme.border[index]};`;
    case 'bb':
      return `border-bottom: ${Theme.border[index]};`;
    case 'bl':
      return `border-left: ${Theme.border[index]};`;
    default:
      return null;
  }
};

export const getBorderWidth = (borderWidthIndex) => getUnit(Theme.borderWidths[borderWidthIndex]);

export const getBorderStyle = (style) => Theme.borderStyles[style];

export const mq = (size, content) => `@media (min-width: ${getUnit(Theme.breakpoints[size])}) {
  ${content}
}`;

export const getRadius = (rad) => getUnit(Theme.radii[rad]);

export const getElevation = (layer) => Theme.zIndices[layer];

export const getShadow = (type) => Theme.shadows[type];

const styledUtils = {
  space,
  getPadding,
  getMargin,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLineHeight,
  getColor,
  alignItems,
  alignContent,
  justifyContent,
  getWidth,
  getBreakpoint,
  getBorder,
  getBorderWidth,
  getBorderStyle,
  mq,
  getRadius,
  getElevation,
  getShadow,
};

export default styledUtils;
