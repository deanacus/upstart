import React from 'react';

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