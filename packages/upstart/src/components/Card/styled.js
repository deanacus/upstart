// import React from 'react';
import styled, { css } from 'styled-components';

import { getPadding, getMargin } from '../../utils/styled-utils';

export const StyledCard = styled.div`
  ${({ isDarkMode }) => isDarkMode && css`
    background: ${({ theme }) => theme.colors.grey[8]};
    color: ${({ theme }) => theme.colors.grey[1]};
  `}

  ${({ isBordered, isDarkMode }) => isBordered && (isDarkMode ? css`
    border: .1rem solid ${({ theme }) => theme.colors.grey[7]};
  ` : css`
    border: .1rem solid ${({ theme }) => theme.colors.grey[3]};
  `)}

  ${({ isRounded }) => isRounded && css`border-radius: ${({ theme }) => theme.borderRadius.md};`}

  ${({ padding, theme }) => padding && getPadding(padding, theme)}

  ${({ margin, theme }) => margin && getMargin(margin, theme)}
`;

export default StyledCard;
