import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledContainer } from './styled';

export const Container = ({
  isFixed, size, children, className,
}) => (
  <ThemeProvider>
    <StyledContainer
      className={className}
      isFixed={isFixed}
      size={size}
    >
      {children}
    </StyledContainer>
  </ThemeProvider>
);

Container.propTypes = {
  /** The children of the grid container */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** Whether or not the grid container has a fixed max-width or not */
  isFixed: PropTypes.bool,

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
};

Container.defaultProps = {
  className: null,
  isFixed: false,
  size: null,
};

export default Container;
