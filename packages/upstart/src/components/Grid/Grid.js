import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { upstartProps } from '../../propTypes';

const StyledContainer = styled.div`
  ${
    ({fixed, size, theme}) => {
      if (fixed) {
        return (size ? `max-width: ${theme.widths[size] / 10}rem`: `max-width: 1200px`)
      }
    }
  }
`;

const StyledRow = styled.div`
  align-items: ${(props) => props.alignment};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: ${({canWrap}) => canWrap ? 'wrap' : 'no-wrap'};
  justify-content: start;

  ${(props) => props.reverse && css`flex-direction: row-reverse;`}

  ${(props) => props.padding && css`
    padding: ${({theme}) => theme.space[props.padding]/10}rem;
  `}

  ${(props) => props.justifyContent && css`
    justify-content: ${props.justifyContent};
  `}
`;

const StyledColumn = styled.div`
  align-content: stretch;
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100%;

  ${(props) => props.reverse && css`flex-direction: column-reverse;`}

  ${(props) => props.flexBasis && css`
    flex-basis: ${props.flexBasis};
    max-width: ${props.flexBasis};
    width: ${props.flexBasis};
  `}

  ${(props) => props.padding && css`
    padding: ${({theme}) => theme.space[props.padding]/10}rem;
  `}

  ${(props) => props.alignItems && css`
    align-items: ${props.alignItems};
  `}

  ${(props) => props.justifyContent && css`
    justify-content: ${props.justifyContent};
  `}

`

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
  children: upstartProps.shared.children,
}

Container.defaultProps = {
  fixed: false,
  size: null,
}

export const Row = ({ align,  canWrap, justify, padding, reverse, children }) => {

  const alignItems = align ? alignmentMap[align] : false;
  const justifyContent = justify ? justifyMap[justify] : false;

  return (
    <StyledRow
      alignItems={alignItems}
      justifyContent={justifyContent}
      padding={padding}
      reverse={reverse}
      canWrap={canWrap}
    >
      {children}
    </StyledRow>
  );
};

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
  padding: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'xxxl',
    'xxxxl',
  ]),

  /** The children nodes of the grid row */
  children: upstartProps.shared.children,
}

Row.defaultProps = {
  canWrap: false,
  reverse: false,
  padding: null,
  justify: 'start',
  align: 'start',
};

export const Column = ({ cols, reverse, align, justify, padding, children }) => {

  const flexBasis = (cols / 12 * 100) + '%';
  const alignItems = align ? alignmentMap[align] : false;
  const justifyContent = justify ? justifyMap[justify] : false;

  return (
    <StyledColumn
      flexBasis={flexBasis}
      alignItems={alignItems}
      justifyContent={justifyContent}
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
  padding: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'xxxl',
    'xxxxl',
  ]),

  /** The contents of the column */
  children: upstartProps.shared.children,
}

Column.defaultProps = {
  cols: null,
  reverse: false,
  justify: 'start',
  align: 'start',
  padding: null,
}

export const Grid = { Container, Row, Column }