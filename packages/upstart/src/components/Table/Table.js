import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  max-width: 100%;
  width: 100%;
`;

export const Table = ({ children }) => (
  <StyledTable>
    {children}
  </StyledTable>
);

Table.propTypes = {
  /** The content of the Table */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Table;
