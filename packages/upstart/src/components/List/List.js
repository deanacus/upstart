import React from 'react';
import PropTypes from 'prop-types';

import { UnorderedList } from '../UnorderedList/UnorderedList';
import { OrderedList } from '../OrderedList/OrderedList';

export const List = ({
  children,
  isOrdered,
  indent,
  className,
  ...rest
}) => (isOrdered
  ? (
    <OrderedList
      indent={indent}
      listStyle={rest.listStyle}
      className={className}
    >
      {children}
    </OrderedList>
  ) : (
    <UnorderedList
      indent={indent}
      listStyle={rest.listStyle}
      className={className}
    >
      {children}
    </UnorderedList>
  ));

List.propTypes = {

  /** The content of the List */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** How far to indent the list from the left */
  indent: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
  ]),

  /** Render an ordered list */
  isOrdered: PropTypes.bool,
};

List.defaultProps = {
  className: null,
  isOrdered: false,
  indent: 4,
};

export default List;
