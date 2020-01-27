import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;

  grid-template-columns: ${({ cols }) => cols && `repeat(${cols}, 1fr)`};
  grid-gap: ${({ gap, theme }) => gap && theme.space[gap]};
`;

export default GridContainer;
