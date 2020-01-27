import styled from 'styled-components';

import { getPadding } from '../../utils/styled-utils';

export const StyledTCell = styled.td`
  text-align: ${({ alignment }) => alignment};
  ${({ padding, theme }) => padding && getPadding(padding, theme)}
`;

export default StyledTCell;
