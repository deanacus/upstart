import React from 'react';
import styled, { css } from 'styled-components';

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

export const Link = ({children, to, href, target, type, external}) => (
  <StyledLink
    href={to || href}
    target={target}
    type={type}
  >
    {children}
  </StyledLink>
)

export default Link;