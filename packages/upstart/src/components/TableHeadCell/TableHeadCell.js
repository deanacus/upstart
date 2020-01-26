import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledTHeadCell } from './styled';

export const TableHeadCell = ({
  children, align, width, className,
}) => (
  <ThemeProvider>
    <StyledTHeadCell
      width={width}
      alignment={align}
      className={className}
    >
      {children}
    </StyledTHeadCell>
  </ThemeProvider>
);

TableHeadCell.propTypes = {

  /** Text alignment for the cell */
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),

  /** The content of the TableHeadCell */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** Width of the cell/column */
  width: PropTypes.string,
};

TableHeadCell.defaultProps = {
  align: 'left',
  width: 'auto',
  className: null,
};

export default TableHeadCell;
