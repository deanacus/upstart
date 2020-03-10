import React from 'react';
import PropTypes from 'prop-types';
import { StyledCollapsible } from './styled';

export const Collapsible = ({ children, collapsed, className }) => (
  <StyledCollapsible collapsed={collapsed} className={className} aria-expanded={!collapsed}>
    {children}
  </StyledCollapsible>
);

Collapsible.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  collapsed: PropTypes.bool,
  className: PropTypes.string,
};

Collapsible.defaultProps = {
  children: null,
  collapsed: false,
  className: null,
};

export default Collapsible;
