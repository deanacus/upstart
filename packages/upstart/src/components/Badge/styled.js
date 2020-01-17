import styled, { css } from 'styled-components';

import {
  getColor, getPadding, getFontSize, getRadius,
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
  background: ${({ variant }) => getColor(variant, 1)};
  border: 1px solid ${({ variant }) => getColor(variant, 4)};
  color: ${({ variant }) => getColor(variant, 8)};
`;

export default StyledBadge;
