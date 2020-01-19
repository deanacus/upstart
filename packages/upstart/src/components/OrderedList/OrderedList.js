import React from 'react';
import PropTypes from 'prop-types';

import { StyledList } from './styled';

export const OrderedList = ({ children, listStyle, indent }) => (
  <StyledList listStyle={listStyle} indent={indent}>
    {children}
  </StyledList>
);

OrderedList.propTypes = {
  /** The style of list marker to be used. */
  listStyle: PropTypes.oneOf([
    'none',
    'decimal',
    'alpha',
    'roman',
    'greek',
    'padded-decimal',
  ]),

  /** How far to indent the list from the left */
  indent: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
  ]),

  /** The content of the UnorderedList */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

OrderedList.defaultProps = {
  listStyle: 'decimal',
  indent: '4',
};

export default OrderedList;
