import React from 'react';
import styled, { css } from 'styled-components';

import { getSpacing } from '../../Utils/getSpacing'

const StyledContainer = styled.div`
  ${(props) => props.fixed ? `max-width: 1200px`: ''}
`;

const StyledRow = styled.div`
  align-items: ${(props) => props.alignment};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;

  ${(props) => props.reverse && css`flex-direction: row-reverse;`}

  ${(props) => props.padding && css`
    padding: ${getSpacing(props.padding)};
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
  justify-content: center;
  max-width: 100%;

  ${(props) => props.reverse && css`flex-direction: column-reverse;`}

  ${(props) => props.flexBasis && css`
    flex-basis: ${props.flexBasis};
    max-width: ${props.flexBasis};
    width: ${props.flexBasis};
  `}

  ${(props) => props.padding && css`
    padding: ${getSpacing(props.padding)};
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

export const Container = ({ type, children }) => (
  <StyledContainer type={type}>
    {children}
  </StyledContainer>
);

export const Row = ({ reverse, align, justify, padding, children, wrap }) => {

  const alignItems = align ? alignmentMap[align] : false;
  const justifyContent = justify ? justifyMap[justify] : false;

  return (
    <StyledRow
      alignItems={alignItems}
      justifyContent={justifyContent}
      padding={padding}
      reverse={reverse}
      wrap={wrap}
    >
      {children}
    </StyledRow>
  );
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