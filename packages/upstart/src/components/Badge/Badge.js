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
  background: ${({ variant }) => color(variant, 1)};
  border: 1px solid ${({ variant }) => color(variant, 4)};
  color: ${({ variant }) => color(variant, 8)};
`;

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
