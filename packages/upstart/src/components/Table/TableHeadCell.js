import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledTableHeadCell = styled.th`
  font-weight: bold;
  text-align: ${({ alignment }) => alignment};
  width: ${({ width }) => width};
`;

export const TableHeadCell = ({ children, align, width }) => (
  <StyledTableHeadCell width={width} alignment={align}>
    {children}
  </StyledTableHeadCell>
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
