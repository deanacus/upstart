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
  flex-direction: ${({ direction, isReverse }) => (isReverse ? `${direction}-reverse` : direction)};

  ${({ alignment }) => getAlignContent(alignment)};
  ${({ alignment }) => getAlignItems(alignment)};
  ${({ justify }) => getJustifyContent(justify)};

  > * {
    ${({ margin }) => margin && getMargin(margin)};
  }
`;

export default StyledFlex;
