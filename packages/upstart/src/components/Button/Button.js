import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { UpstartTheme } from '../ThemeProvider/ThemeProvider';

const baseStyles = css`
  border: none;
  border-radius: ${({theme}) => theme.radii.s/10}rem;
  box-sizing: border-box;
  color: ${({theme}) => theme.colors.white};
  cursor: pointer;
  display: inline-block;
  font-family: ${({theme}) => theme.fonts.sans};
  font-size: ${({theme}) => theme.fontSizes.body.s/10}rem;
  line-height: ${({theme}) => theme.lineHeights.body};
  padding: ${({theme}) => `${theme.space.xs/10}rem ${theme.space.s/10}rem`};

`;

const primary = {
  fill: css`
    background: ${({theme}) => theme.colors.primary[500]};
  `,
  ghost: css`
    background: transparent;
    border: .1rem solid ${({theme}) => theme.colors.primary[500]};
    color: ${({theme}) => theme.colors.primary[500]};
  `,
}

const primaryStyles = css`
  background: ${({theme}) => theme.colors.primary[500]};
`;

const secondaryStyles = css`
  background: ${({theme}) => theme.colors.secondary[500]};
`;

const StyledLink = styled.a`
  ${baseStyles}
  text-decoration: none;
  ${({variant}) => variant === 'primary' && primaryStyles}
  ${({variant}) => variant === 'secondary' && secondaryStyles}
`;

const StyledButton = styled.button`
  ${baseStyles}
  ${({variant, ghost}) => variant === 'primary' && !ghost && primary.fill}
  ${({variant, ghost}) => variant === 'primary' && ghost && primary.ghost}
  ${({variant, ghost}) => variant === 'secondary' && secondaryStyles}
`;

export const Button = ({children, type, variant, href, ...rest}) => {
  return (
    <UpstartTheme>
      { href ?
        (
          <StyledLink href={href} variant={variant} {...rest}>{children}</StyledLink>
        ) :
        (
          <StyledButton variant={variant} type={type} {...rest}>{children}</StyledButton>
        )
      }
    </UpstartTheme>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

Button.defaultProps = {
  href: null,
  type: 'button',
  variant: 'primary'
}

export default Button;
