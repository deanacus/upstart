import React from 'react';
import styled from 'styled-components';
import { getBorder } from '@deanacus/upstart';
import { Branding } from './Branding';
import { Menu } from './Menu';
import { SocialLinks } from './SocialLinks';

const Nav = styled.div`
  border-right: ${getBorder('grey')};
  position: relative;
  width: 100%;
  border-right: ${({ theme }) => theme.borders.separator};
  height: 100%;
`;

const FixedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  position: fixed;
`;

export const Navigation = () => (
  <Nav>
    <FixedWrapper>
      <Branding />
      <Menu />
      <SocialLinks />
    </FixedWrapper>
  </Nav>
);

export default Navigation;
