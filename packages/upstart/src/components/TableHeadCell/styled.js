import styled from 'styled-components';

import { getPadding } from '../../utils/styled-utils';

export const StyledTHeadCell = styled.th`
  font-weight: bold;
  text-align: ${({ alignment }) => alignment};
  ${({ padding }) => padding && getPadding(padding)};
`;

export default StyledTHeadCell;
