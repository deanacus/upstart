import React from 'react';
import PropTypes from 'prop-types';

import { StyledTable } from './styled'

export const Table = ({children}) => {
  return (
    <StyledTable>
      {children}
    </StyledTable>
  )
}

Table.propTypes = {
  /** The children of the Table */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}