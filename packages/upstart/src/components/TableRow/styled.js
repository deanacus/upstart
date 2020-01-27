import styled from 'styled-components';

export const StyledTRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[3]};
  max-width: 100%;
  width: 100%;
`;

export default StyledTRow;
