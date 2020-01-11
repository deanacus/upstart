import styled from 'styled-components';

import {
  padding as getPadding,
  alignItems as getAlignItems,
  justifyContent as getJustifyContent,
} from '../../utils/styled-utils';

export const StyledRow = styled.div`
  align-content: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  flex-wrap: ${({ canWrap }) => (canWrap ? 'wrap' : 'no-wrap')};
  width: 100%;

  ${({ alignment }) => getAlignItems(alignment)};
  ${({ justifyContent }) => getJustifyContent(justifyContent)};
  ${({ padding }) => padding && getPadding(padding)}
`;

export default StyledRow;
