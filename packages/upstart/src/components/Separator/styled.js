import styled from 'styled-components';
import { getMargin } from '../../utils/styled-utils';

export const HorizontalSeparator = styled.hr`
  border: none;
  border-bottom: ${({ theme }) => theme.borders.separator};
  margin: ${({ theme }) => getMargin('m-0', theme)};
  width: 100%;
`;

export const VerticalSeparator = styled.div`
  border: none;
  border-right: ${({ theme }) => theme.borders.separator};
  height: 100%;
  margin: ${({ theme }) => getMargin('m-0', theme)};
  width: 1px;
`;
