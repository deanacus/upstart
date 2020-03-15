import React from 'react';
import PropTypes from 'prop-types';
import { StyledStack } from './styled';

export const Stack = ({
  horizontal,
  spacing,
  children,
  className,
}) => (
  <StyledStack className={className} spacing={spacing} horizontal={horizontal}>
    {children}
  </StyledStack>
);

Stack.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  className: PropTypes.string,
  horizontal: PropTypes.bool,
  spacing: PropTypes.oneOf([
    'xxxs',
    'xxs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'xxxl',
  ]),
};

Stack.defaultProps = {
  children: null,
  className: null,
  horizontal: false,
  spacing: 'sm',
};

export default Stack;
