import React from 'react';
import PropTypes from 'prop-types';

import { TR } from './TR';
import { StyledTHead } from './styled'

export const THead = ({children, padding}) => {
  return (
    <StyledTHead>
      <TR padding={padding}>
        {children}
      </TR>
    </StyledTHead>
  )
}

THead.propTypes = {
  /** The children of the THead */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}