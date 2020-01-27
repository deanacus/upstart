import styled from 'styled-components';

import {
  getPadding,
  alignItems as getAlignItems,
  justifyContent as getJustifyContent,
} from '../../utils/styled-utils';

export const StyledColumn = styled.div`
  align-content: stretch;
  box-sizing: border-box;
  display: flex;
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-direction: ${({ isReverse }) => (isReverse ? 'column-reverse' : 'column')};
  max-width: ${({ flexBasis }) => flexBasis};
  width: 100%;

  ${({ alignItems }) => getAlignItems(alignItems)};
  ${({ justifyContent }) => getJustifyContent(justifyContent)};
  ${({ padding, theme }) => padding && getPadding(padding, theme)}
`;

export default StyledColumn;
