import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledLabel, TextInput } from './styled';

export const Input = ({
  id, isInline, type, label, placeholder, className, ...props
}) => (
  <ThemeProvider>
    <StyledLabel
      isInline={isInline}
      htmlFor={id}
      className={className && `${className} ${className}-label`}
    >
      {label}
      <TextInput
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className={className && `${className} ${className}-input`}
      />
    </StyledLabel>
  </ThemeProvider>
);

Input.propTypes = {
  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The unique identifier for the Input */
  id: PropTypes.string.isRequired,

  /** If the label should be alongside the Input */
  isInline: PropTypes.bool,

  /** The text for the Input label */
  label: PropTypes.string.isRequired,

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
  isInline: false,
  placeholder: null,
  type: 'text',
};

export default Input;
