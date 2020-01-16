import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { margin, padding, color } from '../../utils/styled-utils';

const StyledQuote = styled.blockquote`
  ${({ rightBorder }) => (
    rightBorder
      ? `border-right: 3px solid ${color('grey', 3)}`
      : `border-left: 3px solid ${color('grey', 3)}`
  )};
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
`;

export const Blockquote = ({ children, cite, rightBorder }) => (
  <StyledQuote rightBorder>
    {children}
    {cite && <cite>&mdash; {cite}</cite>}
  </StyledQuote>
);

Blockquote.propTypes = {
  /** Whether or not to render the border on the right */
  rightBorder: PropTypes.bool,

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
  rightBorder: false,
};

export default Blockquote;
