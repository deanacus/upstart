import styled from 'styled-components';

import { width } from '../../utils/styled-utils';

export const StyledContainer = styled.div`
  ${({ fixed, size }) => (fixed && size ? `max-width:${width(size)}` : 'max-width: 1200px')}
`;

export default StyledContainer;
