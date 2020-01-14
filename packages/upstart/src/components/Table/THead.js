import React from 'react';
import PropTypes from 'prop-types';

import { TR } from './TR';
import { StyledTHead } from './styled';

export const THead = ({ children, padding }) => (
  <StyledTHead>
    <TR padding={padding}>
      {children}
    </TR>
  </StyledTHead>
);

THead.propTypes = {
  /** The padding value to be used on the Row. Based on the bootstrap padding classes */
  padding: PropTypes.string,

  /** The children of the THead */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

THead.defaultProps = {
  padding: '',
};

export default THead;
