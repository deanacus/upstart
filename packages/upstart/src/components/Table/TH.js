import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { padding as getPadding } from '../../utils/styled-utils'

export const StyledTHeadCell = styled.th`
  font-weight: bold;
  text-align: ${({alignment}) => alignment};
  ${({padding}) => padding && getPadding(padding)};
`;

export const TH = ({children, align, padding }) => {
  return (
    <StyledTHeadCell alignment={align} padding={padding}>
      {children}
    </StyledTHeadCell>
  )
}

TH.propTypes = {

  /** Text alignment for the cell */
  align: PropTypes.oneOf([
    "left",
    "center",
    "right"
  ]),

  /** The padding value to be used on the Row. Based on the bootstrap padding classes */
  padding: PropTypes.string,

  /** The children of the TH */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

TH.defaultProps = {
  align: "left",
  padding: "p-2",
}