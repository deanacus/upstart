import styled from 'styled-components';

import { space } from '../../utils/styled-utils';

export const GridContainer = styled.div`
  display: grid;

  grid-template-columns: ${({ cols }) => cols && `repeat(${cols}, 1fr)`};
  grid-gap: ${({ gap }) => gap && space(gap)};
`;

export default GridContainer;
