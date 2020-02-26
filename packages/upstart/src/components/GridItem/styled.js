import styled, { css } from 'styled-components';

export const Item = styled.div`
  place-self: stretch;
  ${({ start, end, span }) => {
    if (start && end) {
      return css`
        grid-column: ${start} / ${end};
      `;
    }

    if (start && span) {
      return css`
        grid-column: ${start} / span ${span};
      `;
    }

    if (end && span) {
      return css`
        grid-column: span ${span} / ${end};
      `;
    }

    if (start && !end && !span) {
      return css`
        grid-column: ${start} / auto;
      `;
    }

    if (!start && end && !span) {
      return css`
        grid-column: auto / ${end};
      `;
    }

    if (!start && !end && span) {
      return css`
        grid-column: auto / span ${span};
      `;
    }

    return css`
      grid-column: auto;
    `;
  }}
`;

export default Item;
