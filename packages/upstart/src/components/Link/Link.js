import React from 'react';
import PropTypes from 'prop-types';

export const Link = ({children, href, newTab, external}) => (
  <a
    href={href}
    target={newTab ? '_blank' : ''}
  >
    {children}
    {external && <small>ext</small>}
  </a>
)

Link.propTypes = {
  /** The URL the link should point to. */
  href: PropTypes.string.isRequired,

  /** Whether or not to launch the link in a new tab/window */
  newTab: PropTypes.bool,

  /** Whether or not the link points to an external domain */
  external: PropTypes.bool,

  /** The content of the link */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}

Link.defaultProps = {
  newTab: false,
  external: false,
}

export default Link;