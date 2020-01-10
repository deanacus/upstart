import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ol`
  list-style-type: ${({ listStyle, listStyleMarker }) => listStyle};
`;

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
