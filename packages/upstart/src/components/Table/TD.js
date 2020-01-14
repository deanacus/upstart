import React from 'react';
import PropTypes from 'prop-types';

import { StyledTCell } from './styled';

export const TD = ({ children, align, padding }) => (
  <StyledTCell alignment={align} padding={padding}>
    {children}
  </StyledTCell>
);

TD.propTypes = {
  /** Text alignment for the cell */
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),

  /** The padding value to be used on the Row. Based on the bootstrap padding classes */
  padding: PropTypes.string,

  /** The children of the TD */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

TD.defaultProps = {
  align: 'left',
  padding: 'p-2',
};

export default TD;
