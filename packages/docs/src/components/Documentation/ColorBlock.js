import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Column } from '@deanacus/upstart';

const ColorChip = styled.div`
  background: ${({ color }) => color};
  height: 5rem;
  width: 100%;
`;

export const ColorBlock = ({ color }) => (
  <Column cols={2} padding="p-2" align="center">
    <ColorChip color={color} />
    {color}
  </Column>
);

ColorBlock.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorBlock;
