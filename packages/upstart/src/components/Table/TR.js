import React from 'react';
import PropTypes from 'prop-types';

import { StyledTRow } from './styled'

export const TR = ({children}) => {
  return (
    <StyledTRow>
      {children}
    </StyledTRow>
  )
}

TR.propTypes = {
  /** The children of the TR */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}