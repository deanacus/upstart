import React from 'react';
import styled from 'styled-components';
import { getBorder, getPadding, Separator } from '@deanacus/upstart';
import { Branding } from './Branding';
import { Menu } from './Menu';
import { Links } from './Links';

const Nav = styled.div`
  ${({ theme }) => getBorder('br-grey', theme)};
  ${({ theme }) => getPadding('px-3', theme)}
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  width: 250px;
`;

export const Navigation = () => (
  <Nav>
    <Branding />
    <Separator />
    <Menu />
    <Separator />
    <Links />
  </Nav>
);

export default Navigation;
