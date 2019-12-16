import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
`;

const StyledTCell = styled.td`
`;

const StyledTHead = styled.thead`
  width: 100%;
  max-width: 100%;
  border-bottom: 1px solid #ccc;
`;

const StyledTHeadCell = styled.th`
  font-weight: bold;
  text-align: left;
`;

const StyledTRow = styled.tr`
  width: 100%;
  max-width: 100%;
  border-bottom: 1px solid #ccc;
`;

export const TR = ({children}) => {
  return (
    <StyledTRow>
      {children}
    </StyledTRow>
  )
}

export const TD = ({children}) => {
  return (
    <StyledTCell>
      {children}
    </StyledTCell>
  )
}

export const THead = ({children}) => {
  return (
    <StyledTHead>
      <tr>
        {children}
      </tr>
    </StyledTHead>
  )
}

export const TH = ({children}) => {
  return (
    <StyledTHeadCell>
      {children}
    </StyledTHeadCell>
  )
}

export const Table = ({children}) => {
  return (
    <StyledTable>
      {children}
    </StyledTable>
  )
}