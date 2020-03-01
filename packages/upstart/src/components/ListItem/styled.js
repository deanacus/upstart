import styled from 'styled-components';
import { getPadding } from '../../utils/styled-utils';

export const StyledListItem = styled.li`
  ${({ theme, padding }) => padding && getPadding(padding, theme)}
`;

export default StyledListItem;
