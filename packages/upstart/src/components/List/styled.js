import styled, { css } from 'styled-components';

export const StyledList = styled.ul`
  ${({ listStyle }) => css`list-style-type: ${listStyle};`}
  ${({ listStyle }) => listStyle === 'none' && css`padding-left: 0;`}
`;

export default StyledList;
