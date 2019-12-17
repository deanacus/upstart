import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledQuote = styled.blockquote`
  border-left: 3px solid #ccc;
  margin-left: ${({theme}) => theme.space.sm};
  margin-right: ${({theme}) => theme.space.sm};
  padding: ${({theme}) => theme.space.sm};

  > p {
    font-size: 18px;
    margin: 0;
  }

  cite {
    display: block;
    text-align: right;
  }
`

export const Blockquote = ({children, cite}) => {
  return (
    <StyledQuote>
      {children}
      {cite && <cite>&mdash; {cite}</cite>}
    </StyledQuote>
  )
}

Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
  cite: PropTypes.string
}

Blockquote.defaultProps = {
  cite: '',
}

export default Blockquote