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

  /** The content of the Stack */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),

  /** Optional className to pass to the Stack */
  className: PropTypes.string,

  /** Whether or not to render the stack horizontally */
  horizontal: PropTypes.bool,

  /** The spacing to apply between the children. */
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
