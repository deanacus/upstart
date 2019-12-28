import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { padding as getPadding } from '../../utils/styled-utils'

export const StyledTCell = styled.td`
  text-align: ${({alignment}) => alignment};
  ${({padding}) => padding &&  getPadding(padding)};
`;

export const TD = ({children, align, padding}) => {
  return (
    <StyledTCell alignment={align}  padding={padding}>
      {children}
    </StyledTCell>
  )
}

TD.propTypes = {
  /** Text alignment for the cell */
  align: PropTypes.oneOf([
    "left",
    "center",
    "right"
  ]),

  /** The padding value to be used on the Row. Based on the bootstrap padding classes */
  padding: PropTypes.string,

  /** The children of the TD */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

TD.defaultProps = {
  align: "left",
  padding: "p-2",
}