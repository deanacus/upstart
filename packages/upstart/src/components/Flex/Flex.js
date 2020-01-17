import React from 'react';
import PropTypes from 'prop-types';

import { StyledFlex } from './styled';

export const Flex = ({
  direction, margin, justify, align, canWrap, children, isReverse,
}) => (
  <StyledFlex
    direction={direction}
    margin={margin}
    justifyContent={justify}
    alignment={align}
    canWrap={canWrap}
    isReverse={isReverse}
  >
    {children}
  </StyledFlex>
);

Flex.propTypes = {
  /** The direction the Flex should flex in */
  direction: PropTypes.oneOf([
    'row',
    'column',
  ]),

  /** The margin alias to be applied to flex children */
  margin: PropTypes.string,

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
  isReverse: PropTypes.bool,

  /** The children nodes of the grid row */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Flex.defaultProps = {
  margin: null,
  canWrap: false,
  direction: 'row',
  justify: 'start',
  align: 'center',
  isReverse: false,
};

export default Flex;
