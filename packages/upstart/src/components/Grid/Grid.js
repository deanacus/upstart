import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

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

export const Container = ({ fixed, size = null, children }) => (
  <StyledContainer fixed={fixed} size={size}>
    {children}
  </StyledContainer>
);

export const Row = ({ reverse, align, justify, padding, children, canWrap }) => {

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
  align: PropTypes.oneOf([
    'stretch',
    'start',
    'end',
    'center',
    'baseline',
  ]),
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
  reverse: PropTypes.bool,
  wrap: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

Row.defaultProps = {
  wrap: false,
  reverse: false,
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

export const Grid = { Container, Row, Column }