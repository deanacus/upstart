import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { upstartProps } from '../../propTypes';

const StyledLink = styled.a`
  ${(props) => props.type ==='button' && css`
    display: inline-block;
    padding: .4rem 1.6rem;
    background: green;
    color: white;
    border-radius: .4rem;
    text-decoration: none;
  `}
`

export const Link = ({children, href, newTab, type, external}) => (
  <StyledLink
    href={href}
    type={type}
    target={newTab ? '_blank' : ''}
  >
    {children}
  </StyledLink>
)

Link.propTypes = {
  /** The URL the link should point to. */
  href: PropTypes.string.isRequired,

  /** Whether or not to launch the link in a new tab/window */
  newTab: PropTypes.bool,

  /** Whether or not the link should be rendered to look like a button */
  type: PropTypes.oneOf([
    'button',
    'link'
  ]),

  /** Whether or not the link points to an external domain */
  external: PropTypes.bool,

  /** The content of the link */
  children: upstartProps.shared.children,
}

Link.defaultProps = {
  newTab: false,
  type: 'link',
  external: false,
}

export default Link;