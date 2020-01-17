import React from 'react';
import PropTypes from 'prop-types';

import { StyledTRow } from './styled';

export const TableRow = ({ children, padding }) => (
  <StyledTRow padding={padding}>
    {children}
  </StyledTRow>
);

TableRow.propTypes = {
  /** The padding string to be applied to the TableRow. */
  padding: PropTypes.string,

  /** The content of the TableRow */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

TableRow.defaultProps = {
  padding: null,
};

export default TableRow;
