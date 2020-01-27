import styled, { css } from 'styled-components';

import { getPadding } from '../../utils/styled-utils';

export const StyledList = styled.ol`
  ${({ indent, theme }) => getPadding(`pl-${indent}`, theme)};
  ${({ listStyle }) => css`list-style-type: ${listStyle};`}
`;

export default StyledList;
