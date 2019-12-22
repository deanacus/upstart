import React from 'react';
import PropTypes from 'prop-types';

import { StyledColumn } from './styled'
import { alignmentMap, justifyMap } from '../../utils';

export const Column = ({ cols, reverse, align, justify, padding, children }) => {
  const flexBasis = cols ? (cols / 12 * 100) + '%' : '100%';

  return (
    <StyledColumn
      flexBasis={flexBasis}
      alignItems={alignmentMap[align]}
      justifyContent={justifyMap[justify]}
      padding={padding}
      reverse={reverse}
    >
      {children}
    </StyledColumn>
  );
}

Column.propTypes = {

  /** The align-items value, mapped internally to the correct CSS value */
  align: PropTypes.oneOf([
    'stretch',
    'start',
    'end',
    'center',
    'baseline',
  ]),

  /** The number of grid columns the current column should render in */
  cols: PropTypes.number,

  /** Whether or not to reverse the flex direction of the Column */
  reverse: PropTypes.bool,

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

  /** The contents of the column */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

Column.defaultProps = {
  cols: null,
  reverse: false,
  justify: 'start',
  align: 'start',
  padding: null,
}