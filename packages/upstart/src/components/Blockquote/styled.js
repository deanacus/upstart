import styled, { css } from 'styled-components';

import { getMargin, getPadding, getColor } from '../../utils/styled-utils';

export const StyledQuote = styled.blockquote`
  ${({ rightBorder }) => (
    rightBorder
      ? css`border-right: 3px solid ${getColor('grey', 3)}`
      : css`border-left: 3px solid ${getColor('grey', 3)}`
  )};
  ${getMargin('mx-3')};
  ${getPadding('p-3')};

  > p {
    font-size: 18px;
    margin: 0;
  }

  cite {
    display: block;
    text-align: right;
  }
`;

export default StyledQuote;
