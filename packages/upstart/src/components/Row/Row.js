import React from 'react';
import PropTypes from 'prop-types';

import { StyledRow } from './styled';

export const Row = ({
  align, canWrap, justify, padding, reverse, children,
}) => (
  <StyledRow
    alignItems={align}
    justifyContent={justify}
    padding={padding}
    reverse={reverse}
    canWrap={canWrap}
  >
    {children}
  </StyledRow>
);

Row.propTypes = {
  /** The align-items value, mapped internally to the correct CSS value */
  align: PropTypes.oneOf([
    'stretch',
    'start',
    'end',
    'center',
    'baseline',
  ]),

  /** The state of whether or not the row can wrap its children onto a second or third line */
  canWrap: PropTypes.bool,

  /** The justify-content value, mapped internally to the correct CSS value */
  justify: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'between',
    'around',
    'evenly',
    'left',
    'right',
  ]),

  /** Whether or not to reverse the flex-direction of the row */
  reverse: PropTypes.bool,

  /** The padding value to be used on the Row. Based on the bootstrap padding classes */
  padding: PropTypes.string,

  /** The children nodes of the grid row */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Row.defaultProps = {
  canWrap: false,
  reverse: false,
  padding: null,
  justify: 'start',
  align: 'start',
};

export default Row;
