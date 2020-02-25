import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getRem, getMargin, getPadding } from '@deanacus/upstart';

const Circle = styled.span`
  background: ${({ status, theme }) => theme.colors[status][5]};
  border-radius: ${({ theme }) => getRem(theme.radii.circle, theme.rootVal)};
  display: inline-block;
  height: 1rem;
  width: 1rem;
  ${({ theme, margin }) => getMargin(margin, theme)}
`;

const StyledStatus = styled.div`
  border: .1rem solid ${({ variant, theme }) => theme.colors[variant][8]};
  border-radius: ${({ theme }) => getRem(theme.radii.circle, theme.rootVal)};
  color: ${({ variant, theme }) => theme.colors[variant][8]};
  display: inline-block;
  ${({ theme }) => getPadding('px-xs', theme)}
`;

const Content = styled.span`
  font-size: ${({ theme }) => getRem(theme.fontSizes.xs)};
`;

const statusMap = {
  complete: 'success',
  progress: 'secondary',
  planned: 'grey',
  retired: 'error',
  review: 'warning',
};

const statusStringMap = {
  complete: 'Complete',
  progress: 'In Progress',
  planned: 'Planned',
  retired: 'Retired',
  review: 'In Review',
};

export const Status = ({ status }) => (
  <StyledStatus variant={statusMap[status]}>
    <Circle status={statusMap[status]} margin="mr-1" />
    <Content>{statusStringMap[status]}</Content>
  </StyledStatus>
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
