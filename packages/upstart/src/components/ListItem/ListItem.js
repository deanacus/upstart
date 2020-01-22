import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

export const ListItem = ({ children, className }) => (
  <ThemeProvider>
    <li className={className}>
      {children}
    </li>
  </ThemeProvider>
);

ListItem.propTypes = {
  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The content of the ListItem */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

ListItem.defaultProps = {
  className: null,
};

export default ListItem;
