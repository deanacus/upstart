import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './styled';

export const Container = ({
  size, children, className,
}) => (
  <StyledContainer
    className={className}
    size={size}
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
};

export default Container;
