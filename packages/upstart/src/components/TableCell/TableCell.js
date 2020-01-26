import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledTCell } from './styled';

export const TableCell = ({ children, align, className }) => (
  <ThemeProvider>
    <StyledTCell alignment={align} className={className}>
      {children}
    </StyledTCell>
  </ThemeProvider>
);

TableCell.propTypes = {
  /** Text alignment for the cell */
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),

  /** The content of the TableCell */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,
};

TableCell.defaultProps = {
  align: 'left',
  className: null,
};

export default TableCell;
