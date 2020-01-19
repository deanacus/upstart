import React from 'react';
import PropTypes from 'prop-types';

export const Pre = ({ children }) => <div>{children}</div>;

Pre.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Pre;
