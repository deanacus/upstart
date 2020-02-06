import styled from 'styled-components';

import {
  getPadding,
  alignItems as getAlignItems,
  justifyContent as getJustifyContent,
} from '../../utils/styled-utils';

export const StyledRow = styled.div`
  align-content: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};
  flex-wrap: ${({ canWrap }) => (canWrap ? 'wrap' : 'no-wrap')};
  width: 100%;
  ${({ padding, theme }) => padding && getPadding(padding, theme)}

  ${({ alignItems }) => getAlignItems(alignItems)};
  ${({ justifyContent }) => getJustifyContent(justifyContent)};
`;

export default StyledRow;
