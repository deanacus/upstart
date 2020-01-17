import React from 'react';
import PropTypes from 'prop-types';

import { StyledTable } from './styled';

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
