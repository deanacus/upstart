import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledBadge } from './styled';

export const Badge = ({ variant, children }) => (
  <ThemeProvider>
    <StyledBadge variant={variant}>
      {children}
    </StyledBadge>
  </ThemeProvider>
);

Badge.propTypes = {

  /** The color variant of the Button */
  variant: PropTypes.oneOf([
    'default',
    'success',
    'error',
    'warning',
    'primary',
    'secondary',
  ]),

  /** Content of the Badge */
  children: PropTypes.node.isRequired,
};

Badge.defaultProps = {
  variant: 'default',
};

export default Badge;
