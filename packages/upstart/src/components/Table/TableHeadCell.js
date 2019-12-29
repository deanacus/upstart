import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledTableHeadCell = styled.th`
  font-weight: bold;
  text-align: ${({alignment}) => alignment};
`;

export const TableHeadCell = ({children, align }) => {
  return (
    <StyledTableHeadCell alignment={align}>
      {children}
    </StyledTableHeadCell>
  )
}

TableHeadCell.propTypes = {

  /** Text alignment for the cell */
  align: PropTypes.oneOf([
    "left",
    "center",
    "right"
  ]),

  /** The content of the TableHeadCell */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

TableHeadCell.defaultProps = {
  align: "left",
}