import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

const baseStyles = css`
  border: none;
  border-radius: ${({theme}) => theme.radii.sm/10}rem;
  box-sizing: border-box;
  color: ${({theme}) => theme.colors.white};
  cursor: pointer;
  display: inline-block;
  font-family: ${({theme}) => theme.fonts.sans};
  line-height: ${({theme}) => theme.lineHeights.body};
`;

const primary = {
  fill: css`
    background: ${({theme}) => theme.colors.primary[500]};
    border: .1rem solid ${({theme}) => theme.colors.primary[500]};
  `,
  ghost: css`
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
  ghost: css`
    background: transparent;
    border: .1rem solid ${({theme}) => theme.colors.secondary[500]};
    color: ${({theme}) => theme.colors.secondary[500]};
  `,
}


const sizeStyles = {
  sm: css`
    font-size: ${({theme}) => theme.fontSizes.body.xs/10}rem;
    padding: ${({theme}) => `${(theme.space.xs - 2) / 10}rem ${(theme.space.sm - 2) / 10}rem`};
  `,
  md: css`
    font-size: ${({theme}) => theme.fontSizes.body.md/10}rem;
    padding: ${({theme}) => `${(theme.space.sm - 2) / 10}rem ${(theme.space.md - 2) / 10}rem`};
  `,
  lg: css`
    font-size: ${({theme}) => theme.fontSizes.body.lg/10}rem;
    padding: ${({theme}) => `${(theme.space.md - 2) / 10}rem ${(theme.space.lg - 2) / 10}rem`};
  `,
}

 const disabled = css`

 `;

export const StyledLink = styled.a`
  ${baseStyles}

  text-decoration: none;

  ${({variant, ghost}) => {
    switch (variant) {
      case 'secondary':
        return ghost ? secondary.ghost : secondary.fill
      case 'primary':
      default:
        return ghost ? primary.ghost : primary.fill
    }
  }}

  ${({size}) => sizeStyles[size]}
`;

export const StyledButton = styled.button`
  ${baseStyles}

  ${({variant, ghost}) => {
    switch (variant) {
      case 'secondary':
        return ghost ? secondary.ghost : secondary.fill
      case 'primary':
      default:
        return ghost ? primary.ghost : primary.fill
    }
  }}

  ${({disabled}) => disabled}

  ${({size}) => sizeStyles[size]}
`;

export const Button = ({children, type, variant, size, href, disabled, handleClick, ...rest}) => {
  return (
    <ThemeProvider>
      { href ?
        (
          <StyledLink
            href={href}
            variant={variant}
            size={size}
            onClick={handleClick}
            disabled={disabled}
            {...rest}
          >
            {children}
          </StyledLink>
        ) :
        (
          <StyledButton
            variant={variant}
            type={type}
            size={size}
            onClick={handleClick}
            disabled={disabled}
            {...rest}
          >
            {children}
          </StyledButton>
        )
      }
    </ThemeProvider>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func,
}

Button.defaultProps = {
  href: null,
  type: 'button',
  variant: 'primary',
  size: 'md',
  handleClick: null,
}

export default Button;
