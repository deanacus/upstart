import styled from 'styled-components';

import { getPadding } from '../../utils/styled-utils';

export const StyledTCell = styled.td`
  text-align: ${({ alignment }) => alignment};
  ${({ padding }) => padding && getPadding(padding)};
`;

export default StyledTCell;
