import styled from 'styled-components';

import { space, width } from '../../utils/styled-utils'

export const StyledContainer = styled.div`
  ${
    ({fixed, size}) => {
      if (fixed) {
        return (size ? `max-width: ${width(size)}`: `max-width: 1200px`)
      }
    }
  }
`;

export const StyledRow = styled.div`
  align-content: stretch;
  align-items: ${({alignment}) => alignment};
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({reverse}) => reverse ? 'row-reverse': 'row'};
  flex-wrap: ${({canWrap}) => canWrap ? 'wrap' : 'no-wrap'};
  justify-content: ${({justifyContent}) => justifyContent};
  width: 100%;

  ${({padding}) => padding && space(padding)}
`;

export const StyledColumn = styled.div`
  align-content: stretch;
  align-items: ${({alignItems}) => alignItems};
  box-sizing: border-box;
  display: flex;
  flex-basis: ${({flexBasis}) => flexBasis};
  flex-direction: ${({reverse}) => reverse ? 'column-reverse' : 'column'};
  justify-content: ${({justifyContent}) => justifyContent};
  max-width: ${({flexBasis}) => flexBasis};

  ${({padding}) => padding && space(padding)};
`