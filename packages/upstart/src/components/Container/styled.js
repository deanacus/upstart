import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: ${({ theme, size }) => theme.widths[size]}px;
`;

export default StyledContainer;
