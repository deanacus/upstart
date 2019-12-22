import styled, { css } from 'styled-components';

const baseStyles = css`
  border: none;
  border-radius: ${({theme}) => theme.radii[1]/10}rem;
  box-sizing: border-box;
  color: ${({theme}) => theme.colors.white};
  cursor: pointer;
  display: inline-block;
  font-family: ${({theme}) => theme.fonts.body};
  line-height: ${({theme}) => theme.lineHeights.body};
`;

const primary = {
  fill: css`
    background: ${({theme}) => theme.colors.primary[500]};
    border: .1rem solid ${({theme}) => theme.colors.primary[500]};
  `,
  outline: css`
    background: transparent;
    border: .1rem solid ${({theme}) => theme.colors.primary[500]};
    color: ${({theme}) => theme.colors.primary[500]};
  `,
}

const secondary = {
  fill: css`
    background: ${({theme}) => theme.colors.secondary[500]};
    border: .1rem solid ${({theme}) => theme.colors.secondary[500]};
  `,
  outline: css`
    background: transparent;
    border: .1rem solid ${({theme}) => theme.colors.secondary[500]};
    color: ${({theme}) => theme.colors.secondary[500]};
  `,
}


const sizeStyles = {
  sm: css`
    font-size: ${({theme}) => theme.fontSizes[1]/10}rem;
    padding: ${({theme}) => `${(theme.space[1] - 2) / 10}rem ${(theme.space[2] - 2) / 10}rem`};
  `,
  md: css`
    font-size: ${({theme}) => theme.fontSizes[2]/10}rem;
    padding: ${({theme}) => `${(theme.space[2] - 2) / 10}rem ${(theme.space[3] - 2) / 10}rem`};
  `,
  lg: css`
    font-size: ${({theme}) => theme.fontSizes[3]/10}rem;
    padding: ${({theme}) => `${(theme.space[3] - 2) / 10}rem ${(theme.space[4] - 2) / 10}rem`};
  `,
}

const disabledStyles = css`
  background: ${({theme}) => theme.colors.grey[400]};
  border: .1rem solid ${({theme}) => theme.colors.grey[400]};
  color: ${({theme}) => theme.colors.white};
  cursor: not-allowed;
`;

export const StyledLink = styled.a`
  ${baseStyles}

  text-decoration: none;

  ${({variant, outline}) => {
    switch (variant) {
      case 'secondary':
        return outline ? secondary.outline : secondary.fill
      case 'primary':
      default:
        return outline ? primary.outline : primary.fill
    }
  }}

  ${({size}) => sizeStyles[size]}
`;

export const StyledButton = styled.button`
  ${baseStyles}

  ${({variant, outline}) => {
    switch (variant) {
      case 'secondary':
        return outline ? secondary.outline : secondary.fill
      case 'primary':
      default:
        return outline ? primary.outline : primary.fill
    }
  }}

  ${({disabled}) => disabled && disabledStyles}

  ${({size}) => sizeStyles[size]}
`;