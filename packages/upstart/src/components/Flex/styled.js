import styled from 'styled-components';

import {
  getMargin,
  alignItems as getAlignItems,
  alignContent as getAlignContent,
  justifyContent as getJustifyContent,
} from '../../utils/styled-utils';

export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: ${({ canWrap }) => (canWrap ? 'wrap' : 'no-wrap')};
  flex-direction: ${({ flexDirection, isReverse }) => (isReverse ? `${flexDirection}-reverse` : flexDirection)};

  ${({ alignment }) => getAlignContent(alignment)};
  ${({ alignment }) => getAlignItems(alignment)};
  ${({ justifyContent }) => getJustifyContent(justifyContent)};

  > * {
    ${({ margin, theme }) => margin && getMargin(margin, theme)}
  }
`;

export default StyledFlex;
