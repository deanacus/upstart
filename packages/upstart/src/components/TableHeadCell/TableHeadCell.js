import React from 'react';
import PropTypes from 'prop-types';

import { StyledTHeadCell } from './styled';

export const TableHeadCell = ({
  align, padding, width, className, children,
}) => (
  <StyledTHeadCell
    width={width}
    textAlign={align}
    className={className}
    padding={padding}
  >
    {children}
  </StyledTHeadCell>
);

TableHeadCell.propTypes = {

  /** Text alignment for the cell */
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),

  /** The content of the TableHeadCell */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The padding value to be used on the Row. Based on the bootstrap padding classes */
  padding: PropTypes.string,

  /** Width of the cell/column */
  width: PropTypes.string,
};

TableHeadCell.defaultProps = {
  align: 'left',
  width: 'auto',
  className: null,
  padding: null,
};

export default TableHeadCell;
