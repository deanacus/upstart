import React from 'react';
import PropTypes from 'prop-types';

import { StyledCard } from './styled';

export const Card = ({
  isDarkMode,
  isBordered,
  isRounded,
  padding,
  margin,
  className,
  children,
}) => (
  <StyledCard
    isDarkMode={isDarkMode}
    isBordered={isBordered}
    isRounded={isRounded}
    padding={padding}
    margin={margin}
    className={className}
  >
    {children}
  </StyledCard>
);

Card.propTypes = {

  /** The children nodes of the Component */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** Whether or not the card should have a border */
  isBordered: PropTypes.bool,

  /** Whether or not the card is being rendered in darkMode */
  isDarkMode: PropTypes.bool,

  /** Whether or not the corners of the card should be rounded off */
  isRounded: PropTypes.bool,

  /** The margin alias to be applied to flex children */
  margin: PropTypes.string,

  /**
   * The padding value to be used on the Card. Based on the bootstrap
   * padding classes
   */
  padding: PropTypes.string,
};

Card.defaultProps = {
  className: null,
  isBordered: false,
  isDarkMode: false,
  isRounded: false,
  margin: null,
  padding: null,
};

export default Card;
