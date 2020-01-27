import React from 'react';
import PropTypes from 'prop-types';


import { StyledBadge } from './styled';

export const Badge = ({ variant, children, className }) => (
  <StyledBadge
    variant={variant}
    className={className}
  >
    {children}
  </StyledBadge>
);

Badge.propTypes = {

  /** Content of the Badge */
  children: PropTypes.node.isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The color variant of the Button */
  variant: PropTypes.oneOf([
    'grey',
    'success',
    'error',
    'warning',
    'primary',
    'secondary',
  ]),
};

Badge.defaultProps = {
  className: null,
  variant: 'grey',
};

export default Badge;
