import React from 'react';
import PropTypes from 'prop-types';

import { StyledTHeadCell } from './styled';

export const TH = ({ children, align, padding }) => (
  <StyledTHeadCell alignment={align} padding={padding}>
    {children}
  </StyledTHeadCell>
);

TH.propTypes = {

  /** Text alignment for the cell */
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),

  /** The padding value to be used on the Row. Based on the bootstrap padding classes */
  padding: PropTypes.string,

  /** The children of the TH */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

TH.defaultProps = {
  align: 'left',
  padding: 'p-2',
};

export default TH;
