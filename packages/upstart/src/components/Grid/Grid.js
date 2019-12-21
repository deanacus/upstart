import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer, StyledRow, StyledColumn } from './styled'

const justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  left: 'left',
  right: 'right',
}

const alignmentMap = {
  stretch:'stretch',
  start:'flex-start',
  end:'flex-end',
  center:'center',
  baseline:'baseline'
};

export const Container = ({ fixed, size, children }) => (
  <StyledContainer fixed={fixed} size={size}>
    {children}
  </StyledContainer>
);

Container.propTypes = {
  /** Whether or not the grid container has a fixed max-width or not */
  fixed: PropTypes.bool,

  /** The max-width to apply to the container if it is fixed */
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'xxxl',
  ]),

  /** The children of the grid container */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

Container.defaultProps = {
  fixed: false,
  size: null,
}

export const Row = ({ align,  canWrap, justify, padding, reverse, children }) => (
  <StyledRow
    alignItems={alignmentMap[align]}
    justifyContent={justifyMap[justify]}
    padding={padding}
    reverse={reverse}
    canWrap={canWrap}
  >
    {children}
  </StyledRow>
)

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
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

Row.defaultProps = {
  canWrap: false,
  reverse: false,
  padding: null,
  justify: 'start',
  align: 'start',
};

export const Column = ({ cols, reverse, align, justify, padding, children }) => {
  const flexBasis = cols ? (cols / 12 * 100) : '100' + '%';

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

export const Grid = { Container, Row, Column }