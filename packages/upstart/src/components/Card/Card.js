// import React from 'react';
import styled, { css } from 'styled-components';

import { padding as getPadding, margin as getMargin, space, color, radius } from '../../utils/styled-utils'

export const Card = styled.div`
  ${({padding}) => padding && space(padding)};

  ${({darkMode}) => darkMode && css`
    background: ${color('grey',800)};
    color: ${color('grey',100)};}
  `}

  ${({border, darkMode}) => border && (darkMode ? css`
    border: .1rem solid ${color('grey',700)};
  ` : css`
    border: .1rem solid ${color('grey',300)};
  `)}

  ${({rounded}) => rounded && css`border-radius: ${radius('md')};`}

  ${({padding}) => padding && css`
    ${getPadding(padding)};
  `}

  ${({margin}) => margin && css`
    ${getMargin(margin)};
  `}
`;