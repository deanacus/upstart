import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledRow } from './styled';

export const Row = ({
  align, canWrap, justify, padding, isReverse, children, className,
}) => (
  <ThemeProvider>
    <StyledRow
      alignItems={align}
      justifyContent={justify}
      padding={padding}
      isReverse={isReverse}
      canWrap={canWrap}
      className={className}
    >
      {children}
    </StyledRow>
  </ThemeProvider>
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

  /** The children nodes of the grid row */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** Whether or not to reverse the flex-direction of the row */
  isReverse: PropTypes.bool,

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

  /** The padding value to be used on the Row. Based on the bootstrap padding classes */
  padding: PropTypes.string,
};

Row.defaultProps = {
  align: 'start',
  canWrap: false,
  className: null,
  justify: 'start',
  padding: null,
  isReverse: false,
};

export default Row;
