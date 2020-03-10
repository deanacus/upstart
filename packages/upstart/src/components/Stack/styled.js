import styled, { css } from 'styled-components';
import { getRem } from '../../utils/styled-utils';

export const StyledStack = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  ${({ horizontal }) => (horizontal ? css`
    flex-direction: row;
  ` : css`
    flex-direction: column;
  `)};

  & > * {
    margin: 0;
    flex: 1;
  }

  & > * + * {
    ${({ horizontal, spacing, theme }) => (horizontal
    ? css`margin-left: ${getRem(theme.space[spacing])};`
    : css`margin-top: ${getRem(theme.space[spacing])};`)}
  }
`;

export default StyledStack;
