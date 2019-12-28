import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color } from '../../utils/styled-utils'

import { TR } from './TR';

export const StyledTHead = styled.thead`
  border-bottom: 2px solid ${color('grey', 400)};
  max-width: 100%;
  width: 100%;
`;

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