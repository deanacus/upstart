import styled from 'styled-components';

export const StyledFigure = styled.figure`
  margin: 0;
  position: relative;
`;

export const StyledImage = styled.img`
  max-width: 100%;
`;

export const StyledCaption = styled.figcaption`
  bottom: ${({ theme }) => theme.space.xs}px;
  left: ${({ theme }) => theme.space.xs}px;
  position: absolute;
`;
