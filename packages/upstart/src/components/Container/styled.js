import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  ${({ isCentered }) => isCentered && css`
    margin-left: auto;
    margin-right: auto;
  `}
  max-width: ${({ theme, size }) => theme.width[size]}px;
`;

export default StyledContainer;
