import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { border as getBorder } from '../../utils/styled-utils';

export const HorizontalSeparator = styled.hr`
  border: none;
  border-bottom: ${getBorder('separator')};
  width: 100%;
`;

export const VerticalSeparator = styled.div`
  border: none;
  border-right: ${getBorder('separator')};
  height: 100%;
  width: 1px;
`;

export const Separator = ({ vertical }) => {
  if (vertical) {
    return <VerticalSeparator />;
  }
  return <HorizontalSeparator />;
};

Separator.propTypes = {
  vertical: PropTypes.bool,
};

Separator.defaultProps = {
  vertical: false,
};

export default Separator;
