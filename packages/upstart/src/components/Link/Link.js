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

  /** The content of the Link */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),

  /** Whether or not the Link points to an external site */
  external: PropTypes.bool,

  /** The URL the Link points to. */
  href: PropTypes.string.isRequired,

  /** Whether or not to launch the Link in a new tab/window */
  newTab: PropTypes.bool,
}

Link.defaultProps = {
  external: false,
  newTab: false,
}

export default Link;