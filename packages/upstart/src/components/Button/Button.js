import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledLink, StyledButton } from './styled';

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
            className="btn btn-link"
            {...rest}
          >
            {children}
          </StyledLink>
        ) : (
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
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func,
}

Button.defaultProps = {
  href: null,
  type: 'button',
  variant: 'primary',
  size: 'md',
  outline: false,
  handleClick: null,
}

export default Button;
