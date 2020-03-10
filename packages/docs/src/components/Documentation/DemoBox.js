import styled from 'styled-components';
import { getPadding } from '@deanacus/upstart';

export const DemoBox = styled.div`
  ${({ theme, padding }) => getPadding((padding || 'p-3'), theme)};
  background: ${({ theme }) => theme.colors.foreground};
  text-align: center;
  color: ${({ theme }) => theme.colors.background};
`;

export default DemoBox;
