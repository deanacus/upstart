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
  /** The style of list marker to be used. */
  listStyle: PropTypes.oneOf([
    'none',
    'disc',
    'circle',
    'square',
    'custom'
  ]),

  /** A custom listStyleMarker to use */
  listStyleMarker: PropTypes.string,

  /** The content of the UnorderedList */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

UnorderedList.defaultProps = {
  listStyle: 'disc',
  listStyleMarker: null,
}