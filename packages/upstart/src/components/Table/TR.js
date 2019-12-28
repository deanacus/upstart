import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color } from '../../utils/styled-utils'

export const StyledTRow = styled.tr`
  border-bottom: 1px solid ${color('grey', 300)};
  max-width: 100%;
  width: 100%;
`;

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