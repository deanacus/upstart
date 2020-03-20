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

const spaceMap = {
  1: 'xxs',
  2: 'xs',
  3: 'sm',
  4: 'md',
  5: 'lg',
  6: 'xl',
  7: 'xxl',
  8: 'xxxl',
};

export const getRem = (value, rootValue = 10) => `${value / rootValue}rem`;

export const getSpacing = (alias, theme) => {
  const [key, index] = alias.split('-');
  const propID = key.charAt(0);
  const prop = propID === 'm' ? 'margin' : 'padding';
  const root = theme.rootVal;
  const value = theme.space[spaceMap[index]];

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
        border-right: ${theme.borders[index]};
        border-left: ${theme.borders[index]};
      `;
    case 'by':
      return `
        border-top: ${theme.borders[index]};
        border-bottom: ${theme.borders[index]};
      `;
    case 'bt':
      return `border-top: ${theme.borders[index]};`;
    case 'br':
      return `border-right: ${theme.borders[index]};`;
    case 'bb':
      return `border-bottom: ${theme.borders[index]};`;
    case 'bl':
      return `border-left: ${theme.borders[index]};`;
    default:
      return null;
  }
};

const styledUtils = {
  getPadding,
  getMargin,
  getRem,
  alignItems,
  alignContent,
  justifyContent,
};

export default styledUtils;
