// import React from 'react';
import styled, { css } from 'styled-components';

import {
  padding as getPadding, margin as getMargin, color, radius,
} from '../../utils/styled-utils';

export const Card = styled.div`
  ${({ darkMode }) => darkMode && css`
    background: ${color('grey', 8)};
    color: ${color('grey', 1)};}
  `}

  ${({ border, darkMode }) => border && (darkMode ? css`
    border: .1rem solid ${color('grey', 7)};
  ` : css`
    border: .1rem solid ${color('grey', 3)};
  `)}

  ${({ rounded }) => rounded && css`border-radius: ${radius('md')};`}

  ${({ padding }) => padding && css`
    ${getPadding(padding)};
  `}

  ${({ margin }) => margin && css`
    ${getMargin(margin)};
  `}
`;

export default Card;
