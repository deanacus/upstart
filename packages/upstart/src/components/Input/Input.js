import React from 'react';
import PropTypes from 'prop-types';

import { StyledLabel, TextInput } from './styled';

export const Input = ({
  id, type, placeholder, className, children,
}) => (
  <StyledLabel
    htmlFor={id}
    className={className && `${className} ${className}-label`}
  >
    {children}
    <TextInput
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
      className={className && `${className} ${className}-input`}
    />
  </StyledLabel>
);

Input.propTypes = {
  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The label text for the input */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,

  /** The unique identifier for the Input */
  id: PropTypes.string.isRequired,

  /** The placeholder text for the Input */
  placeholder: PropTypes.string,

  /** The type of input field */
  type: PropTypes.oneOf([
    'text',
    'email',
    'phone',
    'number',
    'currency',
    'date',
    'search',
  ]),
};

Input.defaultProps = {
  className: null,
  placeholder: null,
  type: 'text',
};

export default Input;
