import React from 'react';
import PropTypes from 'prop-types';

import { StyledList } from './styled';

export const OrderedList = ({ children, listStyle, listStyleMarker }) => (
  <StyledList listStyle={listStyle} listStyleMarker={listStyleMarker}>
    {children}
  </StyledList>
);

OrderedList.propTypes = {
  /** The style of list marker to be used */
  listStyle: PropTypes.oneOf([
    'none',
    'decimal',
    'alpha',
    'roman',
    'greek',
    'padded-decimal',
  ]),

  /** A custom listStyleMarker to use */
  listStyleMarker: PropTypes.string,

  /** The content of the OrderedList */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

OrderedList.defaultProps = {
  listStyle: 'decimal',
  listStyleMarker: null,
};

export default OrderedList;
