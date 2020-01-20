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
  ${({ variant }) => (
    variant !== 'default'
      ? css`
        background: ${getColor(variant, 0)};
        border: ${getBorder(variant)};
        color: ${getColor(variant, 8)};
      `
      : css`
        background: ${getColor('grey', 1)};
        border: ${getBorder('grey')};
        color: ${getColor('grey', 8)};
      `
  )};
`;

export default StyledBadge;
