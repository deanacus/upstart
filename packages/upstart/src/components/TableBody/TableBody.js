import React from 'react';
import PropTypes from 'prop-types';

export const TableBody = ({ children, className }) => (
  <tbody className={className}>
    {children}
  </tbody>
);

TableBody.propTypes = {

  /** The children of the TableBody */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,
};

TableBody.defaultProps = {
  className: null,
};

export default TableBody;
