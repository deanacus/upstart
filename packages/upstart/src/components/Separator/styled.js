import styled from 'styled-components';

export const HorizontalSeparator = styled.hr`
  border: none;
  border-bottom: ${({ theme }) => theme.borders.separator};
  width: 100%;
`;

export const VerticalSeparator = styled.div`
  border: none;
  border-right: ${({ theme }) => theme.borders.separator};
  height: 100%;
  width: 1px;
`;
