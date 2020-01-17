import React from 'react';
import PropTypes from 'prop-types';

export const ListItem = ({ children }) => (
  <li>
    {children}
  </li>
);

ListItem.propTypes = {
  /** The content of the ListItem */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ListItem;
