import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getRem } from '@deanacus/upstart';

const Circle = styled.span`
  background: ${({ variant, theme }) => theme.colors[variant]['500']};
  border-radius: ${({ theme }) => getRem(theme.borderRadius.circle, theme.rootVal)};
  display: inline-block;
  height: ${({ size, theme }) => getRem(theme.space[size], theme.rootVal)};
  width: ${({ size, theme }) => getRem(theme.space[size], theme.rootVal)};
`;

export const Status = ({ variant, size }) => (
  <Circle variant={variant} size={size} />
);

Status.propTypes = {
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

Status.defaultProps = {
  size: 'sm',
  variant: 'grey',
};

export default Status;
