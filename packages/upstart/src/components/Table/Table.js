import React from 'react';
import PropTypes from 'prop-types';

import { StyledTable } from './styled';

export const Table = ({ children, className }) => (
  <StyledTable className={className}>
    {children}
  </StyledTable>
);

Table.propTypes = {
  /** The content of the Table */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,
};

Table.defaultProps = {
  className: null,
};

export default Table;
