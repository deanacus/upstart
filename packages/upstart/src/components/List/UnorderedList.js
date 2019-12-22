import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  ${({listStyle, listStyleMarker}) => {
    if ( listStyle === 'custom' ) {
      return `list-style-type: ${listStyleMarker};`
    }
    return `list-style-type: ${listStyle};`
  }}
`

export const UnorderedList = ({children, listStyle, listStyleMarker}) => (
  <StyledList listStyle={listStyle} listStyleMarker={listStyleMarker}>
    {children}
  </StyledList>
)

UnorderedList.propTypes = {
  /** The style of list marker to be used. If custom is used, you need to also provide a listStyleMarker prop value */
  listStyle: PropTypes.oneOf([
    'none',
    'disc',
    'circle',
    'square',
    'custom'
  ]),

  /** A custom listStyleMarker to use */
  listStyleMarker: PropTypes.string,

  /** The children to be rendered inside the list */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

UnorderedList.defaultProps = {
  listStyle: 'disc',
  listStyleMarker: 'disc',
}