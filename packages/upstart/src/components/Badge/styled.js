import styled, { css } from 'styled-components';

import { getPadding } from '../../utils/styled-utils';

const baseStyles = css`
  align-content: center;
  border-radius: ${({ theme }) => theme.radii.sm}px;
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  ${({ theme }) => getPadding('px-xs', theme)}
`;

const variantStyles = css`
  background: ${({ theme, variant }) => theme.colors[variant][0]};
  border: ${({ theme, variant }) => theme.borders[variant]};
  color: ${({ theme, variant }) => theme.colors[variant][9]};
`;

export const StyledBadge = styled.span`
  ${baseStyles}
  ${variantStyles}
`;

export default StyledBadge;
