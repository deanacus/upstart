import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
  max-width: 100%;
  width: 100%;
`;

const StyledTCell = styled.td`
  text-align: ${({alignment}) => alignment};
  ${({padding, theme}) => padding && theme.utils.getSpacing(padding)};
`;

const StyledTHead = styled.thead`
  border-bottom: 2px solid ${({theme}) => theme.colors.grey[400]};
  max-width: 100%;
  width: 100%;
`;

const StyledTHeadCell = styled.th`
  font-weight: bold;
  text-align: ${({alignment}) => alignment};
  ${({padding, theme}) => padding && theme.utils.getSpacing(padding)};
`;

const StyledTRow = styled.tr`
  border-bottom: 1px solid ${({theme}) => theme.colors.grey[300]};
  max-width: 100%;
  width: 100%;
`;

export const TR = ({children}) => {
  return (
    <StyledTRow>
      {children}
    </StyledTRow>
  )
}

TR.propTypes = {
  /** The children of the TR */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

export const TD = ({children, align, padding}) => {
  return (
    <StyledTCell alignment={align}  padding={padding}>
      {children}
    </StyledTCell>
  )
}

TD.propTypes = {
  /** Text alignment for the cell */
  align: PropTypes.oneOf([
    "left",
    "center",
    "right"
  ]),

  /** The padding value to be used on the Row. Based on the bootstrap padding classes */
  padding: PropTypes.string,

  /** The children of the TD */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

TD.defaultProps = {
  align: "left",
  padding: "p-2",
}

export const THead = ({children, padding}) => {
  return (
    <StyledTHead>
      <TR padding={padding}>
        {children}
      </TR>
    </StyledTHead>
  )
}

THead.propTypes = {
  /** The children of the THead */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

export const TH = ({children, align, padding }) => {
  return (
    <StyledTHeadCell alignment={align} padding={padding}>
      {children}
    </StyledTHeadCell>
  )
}

TH.propTypes = {

  /** Text alignment for the cell */
  align: PropTypes.oneOf([
    "left",
    "center",
    "right"
  ]),

  /** The padding value to be used on the Row. Based on the bootstrap padding classes */
  padding: PropTypes.string,

  /** The children of the TH */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

TH.defaultProps = {
  align: "left",
  padding: "p-2",
}

export const Table = ({children}) => {
  return (
    <StyledTable>
      {children}
    </StyledTable>
  )
}

Table.propTypes = {
  /** The children of the Table */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}