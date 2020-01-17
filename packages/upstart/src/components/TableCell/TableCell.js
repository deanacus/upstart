import React from 'react';
import PropTypes from 'prop-types';

import { StyledTCell } from './styled';

export const TableCell = ({ children, align }) => (
  <StyledTCell alignment={align}>
    {children}
  </StyledTCell>
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
};

TableCell.defaultProps = {
  align: 'left',
};

export default TableCell;
