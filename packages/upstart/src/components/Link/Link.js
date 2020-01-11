import React from 'react';
import PropTypes from 'prop-types';

export const Link = ({
  children, href, newTab, isExternal,
}) => (
  <a
    href={href}
    target={newTab || isExternal ? '_blank' : ''}
  >
    {children}
    {isExternal && <small>ext</small>}
  </a>
);

Link.propTypes = {

  /** The content of the Link */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** Whether or not the Link points to an external site */
  isExternal: PropTypes.bool,

  /** The URL the Link points to. */
  href: PropTypes.string.isRequired,

  /** Whether or not to launch the Link in a new tab/window */
  newTab: PropTypes.bool,
};

Link.defaultProps = {
  isExternal: false,
  newTab: false,
};

export default Link;
