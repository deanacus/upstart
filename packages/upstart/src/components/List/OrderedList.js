import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

StyledList = styled.ol`
  list-style-type: ${({listStyle, listStyleMarker}) => listStyle};
`

export const OrderedList = ({children, listStyle, listStyleMarker}) => (
  <StyledList listStyle={listStyle} listStyleMarker={listStyleMarker}>
    {children}
  </StyledList>
)

OrderedList.propTypes = {
  /** The style of list marker to be used. If custom is used, you need to also provide a listStyleMarker prop value */
  listStyle: PropTypes.oneOf([
    'none',
    'decimal',
    'alpha',
    'roman',
    'greek',
    'padded-decimal',
  ]),

  /** A custom listStyleMarker to use */
  listStyleMarker: PropTypes.string,

  /** The children to be rendered inside the list */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

OrderedList.defaultProps = {
  listStyle: 'decimal',
}