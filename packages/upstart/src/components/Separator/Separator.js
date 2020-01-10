import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useBorder } from '../../hooks/useBorder';

export const HorizontalSeparator = styled.hr`
  border: none;
  border-bottom: ${({ border }) => border};
  width: 100%;
`;

export const VerticalSeparator = styled.div`
  border: none;
  border-right: ${({ border }) => border};
  height: 100%;
  width: 1px;
`;

export const Separator = ({ vertical }) => {
  const border = useBorder('separator');
  if (vertical) {
    return <VerticalSeparator border={border} />;
  }
  return <HorizontalSeparator border={border} />;
};

Separator.propTypes = {
  vertical: PropTypes.bool,
};

Separator.defaultProps = {
  vertical: false,
};

export default Separator;
