import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { padding as getPadding } from '../../utils/styled-utils'

export const StyledTableCell = styled.td`
  text-align: ${({alignment}) => alignment};
  ${({padding}) => padding &&  getPadding(padding)};
`;

export const TableCell = ({children, align}) => {
  return (
    <StyledTableCell alignment={align}>
      {children}
    </StyledTableCell>
  )
}

TableCell.propTypes = {
  /** Text alignment for the cell */
  align: PropTypes.oneOf([
    "left",
    "center",
    "right"
  ]),

  /** The content of the TableCell */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

TableCell.defaultProps = {
  align: "left",
}