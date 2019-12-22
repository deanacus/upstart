import styled from 'styled-components';

import {
  padding as getPadding,
  alignItems as getAlignItems,
  justifyContent as getJustifyContent
} from '../../utils/styled-utils'

export const StyledColumn = styled.div`
  align-content: stretch;
  box-sizing: border-box;
  display: flex;
  flex-basis: ${({flexBasis}) => flexBasis};
  flex-direction: ${({reverse}) => reverse ? 'column-reverse' : 'column'};
  max-width: ${({flexBasis}) => flexBasis};

  ${({alignItems}) => getAlignItems(alignItems)};
  ${({justifyContent}) => getJustifyContent(justifyContent)};
  ${({padding}) => padding && getPadding(padding)};
`