import styled from 'styled-components';

import { getWidth } from '../../utils/styled-utils';

export const StyledContainer = styled.div`
  ${({ fixed, size }) => (fixed && size ? `max-width:${getWidth(size)}` : 'max-width: 1200px')}
`;

export default StyledContainer;
