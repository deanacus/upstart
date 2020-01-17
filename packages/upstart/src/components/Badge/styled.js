import styled, { css } from 'styled-components';

import {
  color, padding, fontSize, radius,
} from '../../utils/styled-utils';

const baseStyles = css`
  align-content: center;


  border-radius: ${radius('sm')};

  display: inline-flex;
  ${fontSize('xs')}
  ${padding('px-1')}
`;

export const StyledBadge = styled.span`
  ${baseStyles}
  background: ${({ variant }) => color(variant, 1)};
  border: 1px solid ${({ variant }) => color(variant, 4)};
  color: ${({ variant }) => color(variant, 8)};
`;

export default StyledBadge;
