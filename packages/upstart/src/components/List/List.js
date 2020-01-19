import React from 'react';
import PropTypes from 'prop-types';
import { UnorderedList } from '../UnorderedList/UnorderedList';
import { OrderedList } from '../OrderedList/OrderedList';

export const List = ({
  children,
  ordered,
  indent,
  ...rest
}) => (ordered
  ? (
    <OrderedList indent={indent} listStyle={rest.listStyle}>
      {children}
    </OrderedList>
  ) : (
    <UnorderedList indent={indent} listStyle={rest.listStyle}>
      {children}
    </UnorderedList>
  ));

List.propTypes = {
  /** How far to indent the list from the left */
  indent: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
  ]),

  /** The content of the List */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** Render an ordered list */
  ordered: PropTypes.bool,
};

List.defaultProps = {
  ordered: false,
  indent: '4',
};

export default List;
