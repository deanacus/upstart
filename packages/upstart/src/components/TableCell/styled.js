import styled from 'styled-components';

import { getPadding } from '../../utils/styled-utils';

export const StyledTCell = styled.td`
  ${({ padding, theme }) => padding && getPadding(padding, theme)}
  text-align: ${({ textAlign }) => textAlign && textAlign};
`;

export default StyledTCell;
