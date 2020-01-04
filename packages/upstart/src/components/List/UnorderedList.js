import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  padding-left: ${({indent}) => indent};
  ${({listStyle}) => {
    return `list-style-type: ${listStyle};`
  }}
`

export const UnorderedList = ({children, listStyle, indent}) => (
  <StyledList listStyle={listStyle}>
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
    PropTypes.string, // Custom marker
  ]),

  indent: PropTypes.string,

  /** The content of the UnorderedList */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

UnorderedList.defaultProps = {
  listStyle: 'disc',
  indent: '1.6rem',
}