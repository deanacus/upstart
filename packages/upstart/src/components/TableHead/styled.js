import styled from 'styled-components';

import { getColor } from '../../utils/styled-utils';

export const StyledTHead = styled.thead`
  border-bottom: 2px solid ${getColor('grey', 400)};
  max-width: 100%;
  width: 100%;
`;

export default StyledTHead;
