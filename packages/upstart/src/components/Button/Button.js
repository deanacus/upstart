import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledLink, StyledButton } from './styled';

export const Button = ({children, type, variant, size, href, isDisabled, handleClick, ...rest}) => {
  return (
    <ThemeProvider>
      { href ?
        (
          <StyledLink
            href={href}
            variant={variant}
            size={size}
            onClick={handleClick}
            isDisabled={isDisabled}
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
            isDisabled={isDisabled}
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
  /** The content of the button */
  children: PropTypes.node.isRequired,

  /** The type attribute to be passed through to the final button element */
  type: PropTypes.oneOf(['button', 'submit']),

  /** The href for a link button to point to. This turns the button element into an anchor element */
  href: PropTypes.string,

  /** The color variant of the button */
  variant: PropTypes.oneOf(['primary', 'secondary']),

  /** Whether or not the button should be outlined/reversed */
  outline: PropTypes.bool,

  /** The size of button to render */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  /** Whether or not the button is disabled */
  isDisabled: PropTypes.bool,

  /** The function to be called when the button is clicked */
  handleClick: PropTypes.func,
}

Button.defaultProps = {
  href: null,
  type: 'button',
  variant: 'primary',
  size: 'md',
  outline: false,
  isDisabled: false,
  handleClick: null,
}

export default Button;
