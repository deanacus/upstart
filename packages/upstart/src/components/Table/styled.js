import styled from 'styled-components';

import { space, color } from '../../utils/styled-utils'

export const StyledTable = styled.table`
  border-collapse: collapse;
  max-width: 100%;
  width: 100%;
`;

export const StyledTCell = styled.td`
  text-align: ${({alignment}) => alignment};
  ${({padding}) => padding && space(padding)};
`;

export const StyledTHead = styled.thead`
  border-bottom: 2px solid ${color('grey', 400)};
  max-width: 100%;
  width: 100%;
`;

export const StyledTHeadCell = styled.th`
  font-weight: bold;
  text-align: ${({alignment}) => alignment};
  ${({padding}) => padding && space(padding)};
`;

export const StyledTRow = styled.tr`
  border-bottom: 1px solid ${color('grey', 300)};
  max-width: 100%;
  width: 100%;
`;