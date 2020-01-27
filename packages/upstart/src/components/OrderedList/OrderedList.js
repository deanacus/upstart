import React from 'react';
import PropTypes from 'prop-types';

import { StyledList } from './styled';

export const OrderedList = ({
  children, listStyle, indent, className,
}) => (
  <StyledList
    listStyle={listStyle}
    indent={indent}
    className={className}
  >
    {children}
  </StyledList>
);

OrderedList.propTypes = {

  /** The content of the UnorderedList */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

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
};

OrderedList.defaultProps = {
  className: null,
  listStyle: 'decimal',
  indent: 4,
};

export default OrderedList;
