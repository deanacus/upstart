import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './styled';

export const Container = ({
  size, children, isCentered, className,
}) => (
  <StyledContainer
    className={className}
    size={size}
    isCentered={isCentered}
  >
    {children}
  </StyledContainer>
);

Container.propTypes = {
  /** The children of the grid container */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** Whether or not the container should be rendered centrally in the page */
  isCentered: PropTypes.bool,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The max-width to apply to the container if it is fixed */
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
  ]),
};

Container.defaultProps = {
  className: null,
  size: 'xxl',
  isCentered: false,
};

export default Container;
