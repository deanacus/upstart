import styled, { css } from 'styled-components';

import { getPadding, getRem } from '../../utils/styled-utils';

const baseStyles = css`
  background: ${({ theme }) => theme.colors.background};
  border: ${({ theme }) => theme.borders.thin};
  border-radius: ${({ theme }) => getRem(theme.radii.md)};
  ${({ theme }) => theme.fontSizes.base};
  ${({ theme }) => getPadding('py-xs', theme)};
  ${({ theme }) => getPadding('px-sm', theme)};
  transition: 0.2s border-color;

  &:focus {
    border-color: #1a202c;
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  display: inline-flex;
  flex-direction: column;
`;

export const TextInput = styled.input`
  ${baseStyles}
`;
