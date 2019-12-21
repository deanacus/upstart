// import React from 'react';
import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({padding, theme}) => padding && theme.utils.getSpacing(padding)};

  ${({darkMode, theme}) => darkMode && css`
    background: ${theme.colors.grey[700]};
    color: ${theme.colors.grey[200]};}
  `}

  ${({border, theme, darkMode}) => border && (darkMode ? css`
    border: .1rem solid ${theme.colors.grey[200]};
  ` : css`
    border: .1rem solid ${theme.colors.grey[700]};
  `)}
`;