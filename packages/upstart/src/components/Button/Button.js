import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledTag } from './styled';

export const Button = ({
  children,
  type,
  variant,
  size,
  href,
  isDisabled,
  isOutline,
  isRounded,
  handleClick,
  ...rest
}) => {

  const isButton = href === null;

  return (
    <ThemeProvider>
      <StyledTag
        as={isButton ? 'button' : 'a'}
        href={isButton ? null : href}
        variant={variant}
        size={size}
        onClick={handleClick}
        disabled={isDisabled}
        isOutline={isOutline}
        isRounded={isRounded}
      >
        {children}
      </StyledTag>
    </ThemeProvider>
  )
};

Button.propTypes = {

  /** The HTML type attribute for the button */
  type: PropTypes.oneOf(['button', 'submit']),

  /** The href for Button to point to. Renders an anchor tag */
  href: PropTypes.string,

  /** The color variant of the Button */
  variant: PropTypes.oneOf(['primary', 'secondary']),

  /** Whether or not the Button should be outlined */
  isOutline: PropTypes.bool,

  /** The size of Button to render */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  /** Whether or not the Button is disabled */
  isDisabled: PropTypes.bool,

  /** Whether or not to render a rounded button */
  isRounded: PropTypes.bool,

  /** The function to be called when the Button is clicked */
  handleClick: PropTypes.func,

  /** Content of the Button */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Button.defaultProps = {
  variant: 'primary',
  href: null,
  handleClick: null,
  size: 'md',
  type: 'button',
  isDisabled: false,
  isRounded: false,
  isOutline: false,
};

export default Button;
