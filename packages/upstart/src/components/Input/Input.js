import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { color, border, fontSize, space } from '../../utils/styled-utils';

const baseStyles = css`
  background: ${color('background')};
  border: ${border('thin')};
  border-radius: 3px;
  ${fontSize('base')};
  padding: ${space('xs')} ${space('sm')};
  transition: 0.2s border-color;

  &:focus {
    border-color: #1a202c;
    outline: none;
  }
`;

const StyledLabel = styled.label`
  display: inline-flex;
  flex-direction: ${({ isInline }) => (isInline ? "row" : "column")};
`;

const TextInput = styled.input`
  ${baseStyles}
`;

export const Input = ({ id, isInline, type, label, placeholder, ...props }) => {
  return (
    <StyledLabel isInline={isInline} htmlFor={id}>
      {label}
      <TextInput type={type} name={id} id={id} placeholder={placeholder} />
    </StyledLabel>
  );
};

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
    "text",
    "email",
    "phone",
    "number",
    "currency",
    "date",
    "search",
  ])
};

Input.defaultProps = {
  type: "text",
  isInline: false,
  placeholder: null,
};
