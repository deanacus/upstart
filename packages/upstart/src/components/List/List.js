import React from 'react';
import PropTypes from 'prop-types';

import { upstartProps } from '../../propTypes';

export const ListItem = ({children}) => (
  <li>
    {children}
  </li>
)

export const UnorderedList = ({children}) => (
  <ul>
    {children}
  </ul>
)

export const OrderedList = ({children}) => (
  <ol>
    {children}
  </ol>
)

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
  children: upstartProps.shared.children,
}

List.defaultProps = {
  type: 'unordered',
  ordered: false,
  children: null,
}

