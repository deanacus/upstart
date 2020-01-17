import styled from 'styled-components';

import { getColor } from '../../utils/styled-utils';

export const StyledTRow = styled.tr`
  border-bottom: 1px solid ${getColor('grey', 300)};
  max-width: 100%;
  width: 100%;
`;

export default StyledTRow;
