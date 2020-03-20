import styled, { css } from 'styled-components';

import { getPadding, getRem } from '../../utils/styled-utils';

const baseStyles = css`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  display: inline-flex;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: ${({ theme }) => theme.lineHeights.body};
`;

const filledStyles = css`
  background: ${({ theme, variant }) => theme.colors[variant][5]};
`;

const outlineStyles = css`
  background: transparent;
  border: ${({ theme, variant }) => theme.borders[variant]};
  color: ${({ theme, variant }) => theme.colors[variant][5]};
`;

const sizeStyles = {
  sm: css`
    font-size: ${({ theme }) => getRem(theme.fontSize.xs, theme.rootVal)};
    ${({ theme }) => getPadding('py-1', theme)};
    ${({ theme }) => getPadding('px-2', theme)};
  `,
  md: css`
    font-size: ${({ theme }) => getRem(theme.fontSize.sm, theme.rootVal)};
    ${({ theme }) => getPadding('py-2', theme)};
    ${({ theme }) => getPadding('px-3', theme)};
  `,
  lg: css`
    font-size: ${({ theme }) => getRem(theme.fontSize.base, theme.rootVal)};
    ${({ theme }) => getPadding('py-3', theme)};
    ${({ theme }) => getPadding('px-4', theme)};
  `,
};

const disabledStyles = css`
  cursor: not-allowed;
  opacity: 0.4;
  pointer-events: none;
`;

const roundedStyles = css`
  border-radius: ${({ theme }) => theme.borderRadius.pill}px;
`;

export const StyledTag = styled.div`
  ${baseStyles}

  text-decoration: none;

  ${({ isOutline }) => (isOutline ? outlineStyles : filledStyles)}

  ${({ disabled }) => disabled && disabledStyles}

  ${({ size }) => sizeStyles[size]}

  ${({ isRounded }) => isRounded && roundedStyles}
`;

export default StyledTag;
