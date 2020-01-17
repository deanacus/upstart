import React from 'react';
import PropTypes from 'prop-types';
import { StyledBadge } from './styled';

export const Badge = ({ variant, children }) => (
  <StyledBadge variant={variant}>{children}</StyledBadge>
);

Badge.propTypes = {
  variant: PropTypes.oneOf([
    'grey',
    'success',
    'error',
    'warning',
    'primary',
    'secondary',
  ]),
  /** Content of the blockquote */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Badge.defaultProps = {
  variant: 'grey',
};

export default Badge;
