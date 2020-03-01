import React from 'react';
import PropTypes from 'prop-types';

import { GridContainer } from './styled';

export const Grid = ({
  cols, gap, children, className,
}) => (
  <GridContainer
    cols={cols}
    gap={gap}
    className={className}
  >
    {children}
  </GridContainer>
);

Grid.propTypes = {

  /**
   * The children of the Grid
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /**
   * A custom className you would like to pass to the Component
   */
  className: PropTypes.string,

  /**
   * The number of columns in the Grid
   */
  cols: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  /**
   * The the index of the value in the space array to use as the size of the gap
   * between columns and rows
   */
  gap: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

Grid.defaultProps = {
  className: null,
  cols: 6,
  gap: 3,
};

export default Grid;
