import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { space } from '../../utils/styled-utils';

const GridContainer = styled.div`
  display: grid;

  grid-template-columns: ${({ cols }) => cols && `repeat(${cols}, 1fr)`};
  grid-gap: ${({ gap }) => gap && space(gap)};
`;

export const Grid = ({ cols, gap, children }) => (
  <GridContainer cols={cols} gap={gap}>
    {children}
  </GridContainer>
);

Grid.propTypes = {

  /** The number of columns in the Grid */
  cols: PropTypes.number,

  /** The size of the gap between columns and rows */
  gap: PropTypes.number,

  /** The children of the Grid */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Grid.defaultProps = {
  cols: 4,
  gap: 3,
};

export default Grid;
