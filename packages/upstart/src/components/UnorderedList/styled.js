import styled, { css } from 'styled-components';
import { getPadding } from '../../utils/styled-utils';

export const StyledList = styled.ul`
  ${({ indent }) => getPadding(`pl-${indent}`)};
  ${({ listStyle }) => css`list-style-type: ${listStyle};`}
`;

export default StyledList;
