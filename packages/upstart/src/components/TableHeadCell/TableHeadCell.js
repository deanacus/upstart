import React from 'react';
import PropTypes from 'prop-types';

import { StyledTHeadCell } from './styled';

export const TableHeadCell = ({ children, align, width }) => (
  <StyledTHeadCell width={width} alignment={align}>
    {children}
  </StyledTHeadCell>
);

TableHeadCell.propTypes = {

  /** Text alignment for the cell */
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),

  /** Width of the cell/column */
  width: PropTypes.string,

  /** The content of the TableHeadCell */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

TableHeadCell.defaultProps = {
  align: 'left',
  width: 'auto',
};

export default TableHeadCell;
