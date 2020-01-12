import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  color, padding, fontSize, radius,
} from '../../utils/styled-utils';

const baseStyles = css`
  align-content: center;
  border-radius: ${radius('sm')};
  display: inline-flex;
  ${fontSize('xs')}
  ${padding('px-1')}
`;

const StyledBadge = styled.span`
  ${baseStyles}
  background: ${({ variant }) => color(variant, 0)};
  border: 1px solid ${({ variant }) => color(variant, 6)};
  color: ${({ variant }) => color(variant, 8)};
`;

export const Badge = ({ variant, children }) => (
  <StyledBadge variant={variant}>{children}</StyledBadge>
);

Badge.propTypes = {
  /** Content of the blockquote */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** The type of badge to render */
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
  variant: 'grey',
};

export default Badge;
