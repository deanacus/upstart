import styled from 'styled-components';

import { getPadding } from '../../utils/styled-utils';

export const StyledTCell = styled.td`
  ${({ padding, theme }) => padding && getPadding(padding, theme)}
`;

export default StyledTCell;
