// import React from 'react';
import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({padding, theme}) => padding && theme.utils.getSpacing(padding)};

  ${({darkMode, theme}) => darkMode && css`
    background: ${theme.colors.grey[800]};
    color: ${theme.colors.grey[100]};}
  `}

  ${({border, theme, darkMode}) => border && (darkMode ? css`
    border: .1rem solid ${theme.colors.grey[700]};
  ` : css`
    border: .1rem solid ${theme.colors.grey[300]};
  `)}

  ${({rounded, theme}) => rounded && css`border-radius: ${theme.radii[2] / 10}rem;`}

  ${({padding, theme}) => padding && css`
    ${theme.utils.getSpacing(padding)};
  `}

  ${({margin, theme}) => margin && css`
    ${theme.utils.getSpacing(margin)};
  `}
`;