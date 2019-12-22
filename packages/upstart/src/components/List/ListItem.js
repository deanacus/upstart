import React from 'react';
import PropTypes from 'prop-types';

export const ListItem = ({children}) => (
  <li>
    {children}
  </li>
)

ListItem.propTypes = {
  /** The children to be rendered inside the list */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}