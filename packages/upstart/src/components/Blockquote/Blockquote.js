import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import { upstartProps } from '../../propTypes';

const StyledQuote = styled.blockquote`
  border-left: 3px solid #ccc;
  ${({theme}) => theme.utils.getSpacing('mx-3')};
  ${({theme}) => theme.utils.getSpacing('p-3')};

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
  children: upstartProps.shared.children,
  /** The (optional) author or work to be cited in the blockquote */
  cite: PropTypes.string
}

Blockquote.defaultProps = {
  cite: '',
}

export default Blockquote