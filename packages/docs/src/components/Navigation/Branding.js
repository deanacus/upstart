import React from 'react';
import styled from 'styled-components';
import { Flex, Link } from '@deanacus/upstart';
import { Logo } from '../Logo';

const StyledLink = styled(Link)`
  width: 10rem;
`;

export const Branding = () => (
  <Flex justify="center" direction="column" margin="my-3">
    <StyledLink href="/">
      <Logo />
    </StyledLink>
  </Flex>
);

export default Branding;
