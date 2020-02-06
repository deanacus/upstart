import React from 'react';
import PropTypes from 'prop-types';

import { StyledTCell } from './styled';

export const TableCell = ({
  children, padding, align, className,
}) => (
  <StyledTCell textAlign={align} padding={padding} className={className}>
    {children}
  </StyledTCell>
);

TableCell.propTypes = {
  /** Text alignment for the cell */
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),

  /** The content of the TableCell */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The padding value to be used on the Row. Based on the bootstrap padding classes */
  padding: PropTypes.string,
};

TableCell.defaultProps = {
  align: 'left',
  className: null,
  padding: null,
};

export default TableCell;
