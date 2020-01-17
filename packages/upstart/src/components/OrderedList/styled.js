import styled from 'styled-components';

export const StyledList = styled.ol`
  list-style-type: ${({ listStyle, listStyleMarker }) => listStyle};
`;

export default StyledList;
