import styled, { css } from 'styled-components';

import { getPadding, getRem } from '../../utils/styled-utils';

const baseStyles = css`
  align-content: center;
  border-radius: ${({ theme }) => getRem(theme.borderRadius.sm)};
  display: inline-block;
  font-size: ${({ theme }) => getRem(theme.fontSize.xs)};
  line-height: 1;
  ${({ theme }) => getPadding('px-xs', theme)}
  ${({ theme }) => getPadding('py-xxs', theme)}
`;

const variantStyles = css`
  background: ${({ theme, variant }) => theme.colors[variant][0]};
  border: 1px solid ${({ theme, variant }) => theme.colors[variant][7]};
  color: ${({ theme, variant }) => theme.colors[variant][7]};
`;

export const StyledBadge = styled.div`
  ${baseStyles}
  ${variantStyles}
`;

export default StyledBadge;
