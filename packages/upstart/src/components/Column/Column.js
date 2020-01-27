import React from 'react';
import PropTypes from 'prop-types';

import { StyledColumn } from './styled';

export const Column = ({
  cols, isReverse, align, justify, padding, className, children,
}) => {
  const flexBasis = cols ? `${cols / 12 * 100}%` : 'auto';

  return (
    <StyledColumn
      flexBasis={flexBasis}
      alignItems={align}
      justifyContent={justify}
      padding={padding}
      isReverse={isReverse}
      className={className}
    >
      {children}
    </StyledColumn>
  );
};

Column.propTypes = {

  /** The align-items value, mapped internally to the correct CSS value */
  align: PropTypes.oneOf([
    'stretch',
    'start',
    'end',
    'center',
    'baseline',
  ]),


  /** The contents of the column */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** The number of grid columns the current column should render in */
  cols: PropTypes.number,

  /** A custom className you would like to pass to the Column */
  className: PropTypes.string,

  /** Whether or not to reverse the flex direction of the Column */
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

Column.defaultProps = {
  align: 'start',
  className: null,
  cols: null,
  isReverse: false,
  justify: 'start',
  padding: null,
};

export default Column;
