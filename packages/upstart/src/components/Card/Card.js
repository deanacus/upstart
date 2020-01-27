// import React from 'react';
import styled, { css } from 'styled-components';

import { getPadding, getMargin } from '../../utils/styled-utils';

export const Card = styled.div`
  ${({ darkMode }) => darkMode && css`
    background: ${({ theme }) => theme.colors.grey[8]};
    color: ${({ theme }) => theme.colors.grey[1]};
  `}

  ${({ border, darkMode }) => border && (darkMode ? css`
    border: .1rem solid ${({ theme }) => theme.colors.grey[7]};
  ` : css`
    border: .1rem solid ${({ theme }) => theme.colors.grey[3]};
  `)}

  ${({ rounded }) => rounded && css`border-radius: ${({ theme }) => theme.radii.md};`}

  ${({ padding, theme }) => padding && getPadding(padding, theme)}

  ${({ margin, theme }) => margin && getMargin(margin, theme)}
`;

export default Card;
