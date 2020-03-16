import React from 'react';
import PropTypes from 'prop-types';
import { StyledCollapsible } from './styled';

export const Collapsible = ({ children, collapsed, className }) => (
  <StyledCollapsible collapsed={collapsed} className={className} aria-expanded={!collapsed}>
    {children}
  </StyledCollapsible>
);

Collapsible.propTypes = {

  /** The content of the Collapsible */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),

  /** Whether or not the Collapsible is collapsed */
  collapsed: PropTypes.bool,

  /** An optional className to pass to the Collapsible */
  className: PropTypes.string,
};

Collapsible.defaultProps = {
  children: null,
  collapsed: false,
  className: null,
};

export default Collapsible;
