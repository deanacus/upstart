import React from 'react';
import PropTypes from 'prop-types';

import { StyledTHead } from './styled';

export const TableHead = ({ children, padding, className }) => (
  <StyledTHead padding={padding} className={className}>
    <tr>
      {children}
    </tr>
  </StyledTHead>
);

TableHead.propTypes = {

  /** The children of the TableHead */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The padding string to be applied to the TableRow. */
  padding: PropTypes.string,
};

TableHead.defaultProps = {
  className: null,
  padding: null,
};

export default TableHead;
