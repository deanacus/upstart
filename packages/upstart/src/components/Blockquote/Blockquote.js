import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledQuote } from './styled';

export const Blockquote = ({ children, cite, rightBorder }) => (
  <ThemeProvider>
    <StyledQuote rightBorder={rightBorder}>
      {children}
      {cite && <cite>&mdash; {cite}</cite>}
    </StyledQuote>
  </ThemeProvider>
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
