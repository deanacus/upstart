import styled from 'styled-components';

import { space } from '../../utils/styled-utils';

export const StyledFigure = styled.figure`
  margin: 0;
  position: relative;
`;

export const StyledImage = styled.img`
  max-width: 100%;
`;

export const StyledCaption = styled.figcaption`
  bottom: ${space('xs')};
  left: ${space('xs')};
  position: absolute;
`;
