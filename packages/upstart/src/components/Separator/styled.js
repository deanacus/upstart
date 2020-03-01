import styled from 'styled-components';
import { getMargin } from '../../utils/styled-utils';

export const HorizontalSeparator = styled.hr`
  border: none;
  border-bottom: ${({ theme }) => theme.borders.separator};
  width: 100%;
  ${({ theme }) => getMargin('m-0', theme)};
`;

export const VerticalSeparator = styled.div`
  border: none;
  border-right: ${({ theme }) => theme.borders.separator};
  height: 100%;
  width: 1px;
  ${({ theme }) => getMargin('m-0', theme)};
`;
