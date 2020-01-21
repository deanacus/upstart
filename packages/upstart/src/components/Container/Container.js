import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './styled';

export const Container = ({
  fixed, size, children, className,
}) => (
  <StyledContainer className={className} fixed={fixed} size={size}>
    {children}
  </StyledContainer>
);

Container.propTypes = {
  /** A custom className you would like to pass to the Column */
  className: PropTypes.string,

  /** Whether or not the grid container has a fixed max-width or not */
  fixed: PropTypes.bool,

  /** The max-width to apply to the container if it is fixed */
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'xxxl',
  ]),

  /** The children of the grid container */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Container.defaultProps = {
  className: null,
  fixed: false,
  size: null,
};

export default Container;
