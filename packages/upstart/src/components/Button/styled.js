import styled, { css } from 'styled-components';

import {
  getColor, getFontFamily, getFontSize, getPadding, getRadius, getLineHeight, getBorder,
} from '../../utils/styled-utils';

const baseStyles = css`
  border: none;
  border-radius: ${getRadius('sm')};
  color: ${getColor('background')};
  cursor: pointer;
  display: inline-flex;
  text-align: center;
  ${getFontFamily('body')};
  ${getLineHeight('body')};
`;

const primary = {
  fill: css`
    background: ${getColor('primary', 5)};
  `,
  outline: css`
    background: transparent;
    border: ${getBorder('primary')};
    color: ${getColor('primary', 5)};
  `,
};

const secondary = {
  fill: css`
    background: ${getColor('secondary', 5)};
  `,
  outline: css`
    background: transparent;
    border: ${getBorder('secondary')};
    color: ${getColor('secondary', 5)};
  `,
};

const sizeStyles = {
  sm: css`
    ${getFontSize('xs')}
    ${getPadding('py-1')}
    ${getPadding('px-2')}
  `,
  md: css`
    ${getFontSize('sm')}
    ${getPadding('py-2')}
    ${getPadding('px-3')}
  `,
  lg: css`
    ${getFontSize('base')}
    ${getPadding('py-3')}
    ${getPadding('px-4')}
  `,
};

const disabledStyles = css`
  cursor: not-allowed;
  opacity: 0.4;
  pointer-events: none;
`;

const roundedStyles = css`
  border-radius: ${getRadius('pill')};
`;

export const StyledTag = styled.div`
  ${baseStyles}

  text-decoration: none;

  ${({ variant, isOutline }) => {
    switch (variant) {
      case 'secondary':
        return isOutline ? secondary.outline : secondary.fill;
      case 'primary':
      default:
        return isOutline ? primary.outline : primary.fill;
    }
  }}

  ${({ disabled }) => disabled && disabledStyles}

  ${({ size }) => sizeStyles[size]}

  ${({ isRounded }) => isRounded && roundedStyles}
`;

export default StyledTag;
