import styled, { css } from 'styled-components';

export const StyledCollapsible = styled.div`
  ${({ collapsed }) => collapsed && css`
    height: 0;
    overflow: hidden;
  `}
`;

export default StyledCollapsible;
