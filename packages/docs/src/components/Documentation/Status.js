import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getRem } from '@deanacus/upstart';

const Circle = styled.span`
  background: ${({ status, theme }) => theme.colors[status][5]};
  border-radius: ${({ theme }) => getRem(theme.radii.circle, theme.rootVal)};
  display: inline-block;
  height: 1rem;
  width: 1rem;
`;

const statusMap = {
  complete: 'success',
  progress: 'secondary',
  planned: 'grey',
  retired: 'error',
  review: 'warning',
};

export const Status = ({ status }) => (
  <Circle status={statusMap[status]} />
);

Status.propTypes = {
  status: PropTypes.oneOf([
    'complete',
    'progress',
    'planned',
    'retired',
    'review',
  ]).isRequired,
};

export default Status;
