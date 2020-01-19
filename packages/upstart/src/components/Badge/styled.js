import styled, { css } from 'styled-components';

import {
  getColor, getPadding, getFontSize, getRadius, getBorder,
} from '../../utils/styled-utils';

const baseStyles = css`
  align-content: center;
  border-radius: ${getRadius('sm')};
  display: inline-flex;
  ${getFontSize('xs')}
  ${getPadding('px-1')}
`;

export const StyledBadge = styled.span`
  ${baseStyles}
  background: ${({ variant }) => (
    variant === 'default'
      ? getColor('grey', 1)
      : getColor(variant, 0)
  )};
  border: ${({ variant }) => (
    variant === 'default'
      ? getBorder('grey')
      : getBorder(variant)
  )};
  color: ${({ variant }) => (
    variant === 'default'
      ? getColor('grey', 8)
      : getColor(variant, 8)
  )};
`;

export default StyledBadge;
