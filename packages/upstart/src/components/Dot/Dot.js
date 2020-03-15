import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getRem } from '../../utils/styled-utils';

export const StyledDot = styled.span`
  background: ${({ color, theme }) => theme.colors[color][5]};
  border-radius: ${({ theme }) => getRem(theme.radii.circle, theme.rootVal)};
  display: inline-block;
  height: ${({ size, theme }) => getRem(theme.space[size], theme.rootVal)};
  width: ${({ size, theme }) => getRem(theme.space[size], theme.rootVal)};
`;

export const Dot = ({ color, size }) => <StyledDot color={color} size={size} />;

Dot.propTypes = {

  /** The color to use for the Dot */
  color: PropTypes.oneOf([
    'grey',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
  ]),

  /** The size of the Dot */
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
  ]),
};

Dot.defaultProps = {
  size: 'sm',
  color: 'grey',
};

export default Dot;
