import styled from 'styled-components';

export const StyledTHead = styled.thead`
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey[5]};
  max-width: 100%;
  width: 100%;
`;

export default StyledTHead;
