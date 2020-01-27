import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getRem } from '@deanacus/upstart';

const Circle = styled.div`
  background: ${({ status, theme }) => theme.colors[status]};
  border-radius: ${({ theme }) => getRem(theme.radii.circle, theme.rootVal)};
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
    'inprogress',
    'planned',
    'retired',
  ]).isRequired,
};

export default Status;
