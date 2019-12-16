import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import { getSpacing } from '../../Utils/getSpacing'

const StyledQuote = styled.blockquote`
  border-left: 3px solid #ccc;
  margin-left: ${getSpacing(3)};
  margin-right: ${getSpacing(3)};
  padding: ${getSpacing(3)};

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