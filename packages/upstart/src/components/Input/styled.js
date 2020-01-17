import styled, { css } from 'styled-components';

import {
  getColor, getBorder, getFontSize, space,
} from '../../utils/styled-utils';

const baseStyles = css`
  background: ${getColor('background')};
  border: ${getBorder('thin')};
  border-radius: 3px;
  ${getFontSize('base')};
  padding: ${space('xs')} ${space('sm')};
  transition: 0.2s border-color;

  &:focus {
    border-color: #1a202c;
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  display: inline-flex;
  flex-direction: ${({ isInline }) => (isInline ? 'row' : 'column')};
`;

export const TextInput = styled.input`
  ${baseStyles}
`;
