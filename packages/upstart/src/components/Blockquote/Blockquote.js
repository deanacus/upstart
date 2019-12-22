import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import { margin, padding, color } from '../../utils/styled-utils'

const StyledQuote = styled.blockquote`
  border-left: 3px solid ${color('grey', 300)};
  ${margin('mx-3')};
  ${padding('p-3')};

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
  /** The children to be rendered inside the list */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** The (optional) author or work to be cited in the blockquote */
  cite: PropTypes.string
}

Blockquote.defaultProps = {
  cite: '',
}

export default Blockquote