import React from 'react';
import PropTypes from 'prop-types';

import { StyledTHead } from './styled';

export const TableHead = ({ children, padding }) => (
  <StyledTHead padding={padding}>
    <tr>
      {children}
    </tr>
  </StyledTHead>
);

TableHead.propTypes = {

  /** The padding string to be applied to the TableRow. */
  padding: PropTypes.string,

  /** The children of the TableHead */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

TableHead.defaultProps = {
  padding: null,
};

export default TableHead;
