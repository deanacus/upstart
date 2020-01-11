import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, padding as getPadding } from '../../utils/styled-utils';

export const StyledTableHead = styled.thead`
  border-bottom: 2px solid ${color('grey', 3)};
  max-width: 100%;
  ${({ padding }) => padding && getPadding(padding)};
  width: 100%;
`;

export const TableHead = ({ children, padding }) => (
  <StyledTableHead padding={padding}>
    <tr>
      {children}
    </tr>
  </StyledTableHead>
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
