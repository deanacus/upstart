import React from 'react';
import PropTypes from 'prop-types';


export const Link = ({
  children, href, newTab, isExternal, className,
}) => (
  <a
    href={href}
    target={newTab || isExternal ? '_blank' : ''}
    className={className}
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

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The URL the Link points to. */
  href: PropTypes.string.isRequired,

  /** Whether or not the Link points to an external site */
  isExternal: PropTypes.bool,

  /** Whether or not to launch the Link in a new tab/window */
  newTab: PropTypes.bool,
};

Link.defaultProps = {
  className: null,
  isExternal: false,
  newTab: false,
};

export default Link;
