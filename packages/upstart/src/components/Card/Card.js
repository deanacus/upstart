// import React from 'react';
import styled, { css } from 'styled-components';

import {
  getPadding, getMargin, getColor, getRadius,
} from '../../utils/styled-utils';

export const Card = styled.div`
  ${({ darkMode }) => darkMode && css`
    background: ${getColor('grey', 8)};
    color: ${getColor('grey', 1)};}
  `}

  ${({ border, darkMode }) => border && (darkMode ? css`
    border: .1rem solid ${getColor('grey', 7)};
  ` : css`
    border: .1rem solid ${getColor('grey', 3)};
  `)}

  ${({ rounded }) => rounded && css`border-radius: ${getRadius('md')};`}

  ${({ padding }) => padding && css`
    ${getPadding(padding)};
  `}

  ${({ margin }) => margin && css`
    ${getMargin(margin)};
  `}
`;

export default Card;
