import React from 'react';
import PropTypes from 'prop-types';
import { StyledCollapsible } from './styled';

export const Collapsible = ({ children, collapsed }) => (
  <StyledCollapsible aria-expanded={!collapsed}>
    {children}
  </StyledCollapsible>
);

Collapsible.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  collapsed: PropTypes.bool,
};

Collapsible.defaultProps = {
  children: null,
  collapsed: false,
};

export default Collapsible;
