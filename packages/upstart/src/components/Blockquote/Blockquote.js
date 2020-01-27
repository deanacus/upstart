import React from 'react';
import PropTypes from 'prop-types';


import { StyledQuote } from './styled';

export const Blockquote = ({
  children, cite, rightBorder, className,
}) => (
  <StyledQuote
    rightBorder={rightBorder}
    className={className}
  >
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

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** Whether or not to render the border on the right */
  rightBorder: PropTypes.bool,
};

Blockquote.defaultProps = {
  cite: null,
  className: null,
  rightBorder: false,
};

export default Blockquote;
