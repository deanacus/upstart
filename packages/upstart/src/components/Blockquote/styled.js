import styled, { css } from 'styled-components';

import { getPadding, getMargin } from '../../utils/styled-utils';

export const StyledQuote = styled.blockquote`
  ${({ rightBorder }) => (
    rightBorder
      ? css`border-right: 3px solid ${({ theme }) => theme.colors.primary[3]}`
      : css`border-left: 3px solid ${({ theme }) => theme.colors.primary[3]}`
  )};
  font-size: ${({ theme }) => theme.fontSizes.md};
  ${({ theme }) => getMargin('mx-3', theme)};
  ${({ theme }) => getPadding('p-3', theme)};

  > :last-child {
    margin: 0;
  }

  cite {
    display: block;
    text-align: right;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export default StyledQuote;
