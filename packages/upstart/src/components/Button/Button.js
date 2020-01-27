import React from 'react';
import PropTypes from 'prop-types';


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
  className,
  ...rest
}) => {
  const isButton = href === null;
  return (
    <StyledTag
      as={isButton ? 'button' : 'a'}
      href={isButton ? null : href}
      variant={variant}
      size={size}
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
      isOutline={isOutline}
      isRounded={isRounded}
      className={className}
    >
      {children}
    </StyledTag>
  );
};

Button.propTypes = {

  /** Content of the Button */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The function to be called when the Button is clicked */
  handleClick: PropTypes.func,

  /** The href for Button to point to. Renders an anchor tag */
  href: PropTypes.string,

  /** Whether or not the Button is disabled */
  isDisabled: PropTypes.bool,

  /** Whether or not the Button should be outlined */
  isOutline: PropTypes.bool,

  /** Whether or not to render a rounded button */
  isRounded: PropTypes.bool,

  /** The size of Button to render */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  /** The HTML type attribute for the button */
  type: PropTypes.oneOf(['button', 'submit']),

  /** The color variant of the Button */
  variant: PropTypes.oneOf(['primary', 'secondary']),

};

Button.defaultProps = {
  className: null,
  handleClick: null,
  href: null,
  isDisabled: false,
  isOutline: false,
  isRounded: false,
  size: 'md',
  type: 'button',
  variant: 'primary',
};

export default Button;
