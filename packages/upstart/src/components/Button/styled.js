import styled, { css } from 'styled-components';

import { color, fontFamily, fontSize, padding, radius, lineHeight } from '../../utils/styled-utils';

const baseStyles = css`
  border: none;
  border-radius: ${radius('sm')};
  box-sizing: border-box;
  color: ${color('background')};
  cursor: pointer;
  display: inline-flex;
  text-align: center;
  ${fontFamily('body')};
  ${lineHeight('body')};
`;

const primary = {
  fill: css`
    background: ${color('primary', 5)};
  `,
  outline: css`
    background: transparent;
    border: .1rem solid ${color('primary', 5)};
    color: ${color('primary', 5)};
  `,
}

const secondary = {
  fill: css`
    background: ${color('secondary', 5)};
  `,
  outline: css`
    background: transparent;
    border: .1rem solid ${color('secondary', 5)};
    color: ${color('secondary', 5)};
  `,
}


const sizeStyles = {
  sm: css`
    ${fontSize('xs')}
    ${padding('py-1')}
    ${padding('px-2')}
  `,
  md: css`
    ${fontSize('sm')}
    ${padding('py-2')}
    ${padding('px-3')}
  `,
  lg: css`
    ${fontSize('base')}
    ${padding('py-3')}
    ${padding('px-4')}
  `,
}

const disabledStyles = css`
  cursor: not-allowed;
  opacity: 0.4;
  pointer-events: none;
`;

export const StyledLink = styled.a`
  ${baseStyles}

  text-decoration: none;

  ${({variant, isOutline}) => {
    switch (variant) {
      case 'secondary':
        return isOutline ? secondary.outline : secondary.fill
      case 'primary':
      default:
        return isOutline ? primary.outline : primary.fill
    }
  }}

  ${({disabled}) => disabled && disabledStyles}


  ${({size}) => sizeStyles[size]}
`;

export const StyledButton = styled.button`
  ${baseStyles}

  ${({variant, isOutline}) => {
    switch (variant) {
      case 'secondary':
        return isOutline ? secondary.outline : secondary.fill
      case 'primary':
      default:
        return isOutline ? primary.outline : primary.fill
    }
  }}

  ${({disabled}) => disabled && disabledStyles}

  ${({size}) => sizeStyles[size]}
`;