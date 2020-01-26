import React from 'react';
import styled from 'styled-components';
import { getBorder } from '@deanacus/upstart';
import { Branding } from './Branding';
import { Menu } from './Menu';

const Nav = styled.div`
  border-right: ${getBorder('grey')};
  width: 100%;
`;

export const Navigation = () => (
  <Nav>
    <Branding />
    <Menu />
  </Nav>
);

export default Navigation;
