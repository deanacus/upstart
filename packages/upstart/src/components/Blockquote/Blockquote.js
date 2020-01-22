import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledQuote } from './styled';

export const Blockquote = ({
  children, cite, rightBorder, className,
}) => (
  <ThemeProvider>
    <StyledQuote rightBorder={rightBorder} className={className}>
      {children}
      {cite && <cite>&mdash; {cite}</cite>}
    </StyledQuote>
  </ThemeProvider>
);

Blockquote.propTypes = {
  /** A custom className you would like to pass to the Column */
  className: PropTypes.string,

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
  className: null,
  cite: null,
  rightBorder: false,
};

export default Blockquote;
