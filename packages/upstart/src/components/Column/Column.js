import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledColumn } from './styled';

export const Column = ({
  cols, isReverse, align, justify, padding, className, children,
}) => {
  const flexBasis = cols ? `${cols / 12 * 100}%` : 'auto';

  return (
    <ThemeProvider>
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
    </ThemeProvider>
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

  /** The contents of the column */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Column.defaultProps = {
  cols: null,
  isReverse: false,
  justify: 'start',
  align: 'stretch',
  padding: null,
  className: null,
};

export default Column;
