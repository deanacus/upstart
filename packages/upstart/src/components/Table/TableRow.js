import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, padding as getPadding } from '../../utils/styled-utils';

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${color('grey', 2)};
  max-width: 100%;
  ${({ padding }) => padding && getPadding(padding)};
  width: 100%;
`;

export const TableRow = ({ children, padding }) => (
  <StyledTableRow padding={padding}>
    {children}
  </StyledTableRow>
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
