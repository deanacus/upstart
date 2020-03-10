import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorChip = styled.div`
  background: ${({ color }) => color};
  height: 5rem;
  width: 100%;
`;

export const ColorBlock = ({ color }) => (
  <div>
    <ColorChip color={color} />
    {color}
  </div>
);

ColorBlock.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorBlock;
