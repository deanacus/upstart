import styled from 'styled-components';

export const Item = styled.div`
  place-self: stretch;
  grid-column-start: ${({ start }) => (start || 'auto')};
  grid-column-end: ${({ end, span }) => {
    if (!end && !span) {
      return 'auto';
    }
    if (end && !span) {
      return end;
    }
    return `span ${span}`;
  }};
`;

export default Item;
