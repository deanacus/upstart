import React from 'react';
import PropTypes from 'prop-types';

import { UnorderedList } from './UnorderedList';
import { OrderedList } from './OrderedList'
import { ListItem } from './ListItem'

export const List = ({children, ordered, type}) => {
  const isOrdered = ordered || type === 'ordered' || type === 'ol';

  return isOrdered ?
  (
    <OrderedList>
      {children}
    </OrderedList>
  ) :  (
    <UnorderedList>
      {children}
    </UnorderedList>
  )
}

List.propTypes = {
  /** The type of list you would like to be rendered */
  type: PropTypes.oneOf([
    'ordered',
    'ol',
    'numbered',
    'unordered',
    'ul',
    'bulleted',
  ]),

  /** Whether or not you want an ordered list or a bullet list. */
  ordered: PropTypes.bool,

  /** The children to be rendered inside the list */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

List.defaultProps = {
  type: 'unordered',
  ordered: false,
  children: null,
}

export { List, UnorderedList, OrderedList, ListItem}

