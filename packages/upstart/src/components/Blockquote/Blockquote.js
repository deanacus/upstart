import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { margin, padding, color } from '../../utils/styled-utils';

const StyledQuote = styled.blockquote`
<<<<<<< HEAD
  border-left: 3px solid ${({theme}) => theme.colors.grey[300]};
  ${({theme}) => theme.utils.getSpacing('mx-3')};
  ${({theme}) => theme.utils.getSpacing('p-3')};
=======
  border-left: 3px solid ${color('grey', 3)};
  ${margin('mx-3')};
  ${padding('p-3')};
>>>>>>> 6f39db9aef581de2d856b95a2187bc5681cf2f79

  > p {
    font-size: 18px;
    margin: 0;
  }

  cite {
    display: block;
    text-align: right;
  }
`;

export const Blockquote = ({ children, cite }) => (
  <StyledQuote>
    {children}
    {cite && <cite>&mdash; {cite}</cite>}
  </StyledQuote>
);

Blockquote.propTypes = {
  /** Content of the blockquote */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  /** The author or work to be cited in the blockquote */
  cite: PropTypes.string,
};

Blockquote.defaultProps = {
  cite: null,
};

export default Blockquote;
