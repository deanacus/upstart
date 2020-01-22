import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledBadge } from './styled';

export const Badge = ({ variant, children, className }) => (
  <ThemeProvider>
    <StyledBadge
      variant={variant}
      className={className}
    >
      {children}
    </StyledBadge>
  </ThemeProvider>
);

Badge.propTypes = {

  /** Content of the Badge */
  children: PropTypes.node.isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The color variant of the Button */
  variant: PropTypes.oneOf([
    'default',
    'success',
    'error',
    'warning',
    'primary',
    'secondary',
  ]),
};

Badge.defaultProps = {
  className: null,
  variant: 'default',
};

export default Badge;
