import styled from 'styled-components';
import { getBorder } from '../../utils/styled-utils';

export const HorizontalSeparator = styled.hr`
  border: none;
  border-bottom: ${getBorder('separator')};
  width: 100%;
`;

export const VerticalSeparator = styled.div`
  border: none;
  border-right: ${getBorder('separator')};
  height: 100%;
  width: 1px;
`;
