import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { border } from '../../utils/styled-utils';
// Work out how to resolve duplicate React
// import { useBorder } from '../../hooks/useThemeValues';

export const HorizontalSeparator = styled.hr`
  border: none;
  border-bottom: ${border('separator')};
  width: 100%;
`;

export const VerticalSeparator = styled.div`
  border: none;
  border-right: ${border('separator')};
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
