import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  ${
    ({fixed, size, theme}) => {
      if (fixed) {
        return (size ? `max-width: ${theme.widths[size] / 10}rem`: `max-width: 1200px`)
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

  ${({padding, theme}) => padding && css`
    ${theme.utils.getSpacing(padding)};
  `}
`;

export const StyledColumn = styled.div`
  align-content: stretch;
  align-items: ${({alignItems}) => alignItems};
  box-sizing: border-box;
  display: flex;
  flex-basis: ${({flexBasis}) => flexBasis}%;
  flex-direction: ${({reverse}) => reverse ? 'column-reverse' : 'column'};
  justify-content: ${({justifyContent}) => justifyContent};
  max-width: ${({flexBasis}) => flexBasis}%;

  ${({padding, theme}) => padding && theme.utils.getSpacing(padding)};
`