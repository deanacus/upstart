// import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getRem } from '../../utils/styled-utils';

export const Dot = styled.span`
  background: ${({ variant, theme }) => theme.colors[variant][5]};
  border-radius: ${({ theme }) => getRem(theme.radii.circle, theme.rootVal)};
  display: inline-block;
  height: ${({ size, theme }) => getRem(theme.space[size], theme.rootVal)};
  width: ${({ size, theme }) => getRem(theme.space[size], theme.rootVal)};
`;

Dot.propTypes = {
  variant: PropTypes.oneOf([
    'grey',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
  ]),
  size: PropTypes.oneOf([
    'xxs',
    'xs',
    'sm',
  ]),
};

Dot.defaultProps = {
  size: 'sm',
  variant: 'grey',
};

export default Dot;
