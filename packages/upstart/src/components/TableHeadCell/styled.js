import styled from 'styled-components';

import { getPadding } from '../../utils/styled-utils';

export const StyledTHeadCell = styled.th`
  font-weight: bold;
  ${({ padding, theme }) => padding && getPadding(padding, theme)};
`;

export default StyledTHeadCell;
