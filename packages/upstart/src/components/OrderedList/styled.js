import styled, { css } from 'styled-components';
import { getPadding } from '../../utils/styled-utils';

export const StyledList = styled.ol`
  ${({ indent }) => getPadding(`pl-${indent}`)};
  ${({ listStyle }) => css`list-style-type: ${listStyle};`}
`;

export default StyledList;
