import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { GridContainer } from './styled';

export const Grid = ({
  cols, gap, children, className,
}) => (
  <ThemeProvider>
    <GridContainer cols={cols} gap={gap}>
      {children}
    </GridContainer>
  </ThemeProvider>
);

Grid.propTypes = {

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

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
  className: null,
  cols: 4,
  gap: 3,
};

export default Grid;
