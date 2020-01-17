import React from 'react';
import PropTypes from 'prop-types';

import { StyledLabel, TextInput } from './styled';

export const Input = ({
  id, isInline, type, label, placeholder, ...props
}) => (
  <StyledLabel isInline={isInline} htmlFor={id}>
    {label}
    <TextInput type={type} name={id} id={id} placeholder={placeholder} />
  </StyledLabel>
);

Input.propTypes = {
  /** The unique identifier for the Input */
  id: PropTypes.string.isRequired,

  /** The text for the Input label */
  label: PropTypes.string.isRequired,

  /** The placeholder text for the Input */
  placeholder: PropTypes.string,

  /** If the label should be alongside the Input */
  isInline: PropTypes.bool,

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
  type: 'text',
  isInline: false,
  placeholder: null,
};

export default Input;
