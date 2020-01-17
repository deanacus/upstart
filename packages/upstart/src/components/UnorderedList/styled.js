import styled, { css } from 'styled-components';

export const StyledList = styled.ul`
  padding-left: ${({ indent }) => indent};
  ${({ listStyle }) => css`list-style-type: ${listStyle};`}
`;

export default StyledList;
