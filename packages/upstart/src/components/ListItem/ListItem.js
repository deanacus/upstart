import React from 'react';
import PropTypes from 'prop-types';


export const ListItem = ({ children, className }) => (
  <li className={className}>
    {children}
  </li>
);

ListItem.propTypes = {

  /** The content of the ListItem */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,
};

ListItem.defaultProps = {
  className: null,
};

export default ListItem;
