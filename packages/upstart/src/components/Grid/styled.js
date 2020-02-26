import styled from 'styled-components';
import { getRem } from '../../utils/styled-utils';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ cols }) => cols && `repeat(${cols}, 1fr)`};
  grid-gap: ${({ gap, theme }) => gap && getRem(theme.space[gap])};
`;

export default GridContainer;
