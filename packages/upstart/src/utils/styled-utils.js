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

export const getRem = (value, rootValue) => `${value / rootValue}rem`;

export const getEm = (value, rootValue) => `${value / rootValue}em`;

export const getPx = (value) => `${value}px`;

export const getSpacing = (alias, theme) => {
  const [key, index] = alias.split('-');
  const propID = key.charAt(0);
  const prop = propID === 'm' ? 'margin' : 'padding';
  const root = theme.rootVal;
  const value = theme.space[index];

  switch (key) {
    case `${propID}`:
      return `${prop}: ${getRem(value, root)};`;
    case `${propID}x`:
      return `
        ${prop}-right: ${getRem(value, root)};
        ${prop}-left: ${getRem(value, root)};
      `;
    case `${propID}y`:
      return `
        ${prop}-top: ${getRem(value, root)};
        ${prop}-bottom: ${getRem(value, root)};
      `;
    case `${propID}t`:
      return `${prop}-top: ${getRem(value, root)};`;
    case `${propID}r`:
      return `${prop}-right: ${getRem(value, root)};`;
    case `${propID}b`:
      return `${prop}-bottom: ${getRem(value, root)};`;
    case `${propID}l`:
      return `${prop}-left: ${getRem(value, root)};`;
    default:
      return null;
  }
};

export const getPadding = (alias, theme) => getSpacing(alias, theme);

export const getMargin = (alias, theme) => getSpacing(alias, theme);

export const alignItems = (align) => `align-items: ${alignmentMap[align]};`;

export const alignContent = (align) => `align-content: ${alignmentMap[align]};`;

export const justifyContent = (justify) => `justify-content: ${justifyMap[justify]};`;

export const getBorder = (alias, theme) => {
  const [key, index] = alias.split('-');

  switch (key) {
    case 'b':
      return `border: ${theme.borders[index]}`;
    case 'bx':
      return `
        border-right: ${theme.border[index]};
        border-left: ${theme.border[index]};
      `;
    case 'by':
      return `
        border-top: ${theme.border[index]};
        border-bottom: ${theme.border[index]};
      `;
    case 'bt':
      return `border-top: ${theme.border[index]};`;
    case 'br':
      return `border-right: ${theme.border[index]};`;
    case 'bb':
      return `border-bottom: ${theme.border[index]};`;
    case 'bl':
      return `border-left: ${theme.border[index]};`;
    default:
      return null;
  }
};

const styledUtils = {
  getPadding,
  getMargin,
  getRem,
  getEm,
  getPx,
  alignItems,
  alignContent,
  justifyContent,
};

export default styledUtils;
