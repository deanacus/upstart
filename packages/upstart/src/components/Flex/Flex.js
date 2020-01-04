import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  margin as getMargin,
  alignItems as getAlignItems,
  alignContent as getAlignContent,
  justifyContent as getJustifyContent
} from '../../utils/styled-utils'

export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: ${({canWrap}) => canWrap ? 'wrap' : 'no-wrap'};
  flex-direction: ${({direction}) => direction};

  ${({alignment}) => getAlignContent(alignment)};
  ${({alignment}) => getAlignItems(alignment)};
  ${({justify}) => getJustifyContent(justify)};

  > * {
    ${({margin}) => margin && getMargin(margin)};
  }
`

export const Flex = ({ direction, spacing, margin, justify, align, canWrap, children }) => {
  return (
    <StyledFlex
      direction={direction}
      margin={margin}
      justifyContent={justify}
      alignment={align}
      canWrap={canWrap}
    >
      {children}
    </StyledFlex>
  )
}

Flex.propTypes = {
  /** The direction the Flex should flex in */
  direction: PropTypes.oneOf([
    'row',
    'column',
  ]),

  /** The theme spacing index the children should be separated buy */
  spacing: PropTypes.number,

  /** The align-items value, mapped internally to the correct CSS value */
  align: PropTypes.oneOf([
    'stretch',
    'start',
    'end',
    'center',
    'baseline',
  ]),

  /** The state of whether or not the row can wrap its children onto a second or third line */
  canWrap: PropTypes.bool,

  /** The justify-content value, mapped internally to the correct CSS value */
  justify: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'between',
    'around',
    'evenly',
    'left',
    'right',
  ]),
/** Whether or not to reverse the flex-direction of the row */
  reverse: PropTypes.bool,

  /** The children nodes of the grid row */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

Flex.defaultProps = {
  spacing: 0,
  canWrap: false,
  direction: 'row',
  justify: 'start',
  align: 'center',
}