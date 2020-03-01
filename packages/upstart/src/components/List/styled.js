import styled, { css } from 'styled-components';
import { getMargin, getPadding } from '../../utils/styled-utils';

export const StyledList = styled.ul`
  ${({ listStyle }) => css`list-style-type: ${listStyle};`}
  ${({ listStyle }) => listStyle === 'none' && css`padding-left: 0;`}
  ${({ theme }) => getMargin('m-0', theme)}
  ${({ theme, padding }) => padding && getPadding(padding, theme)}
`;

export default StyledList;
