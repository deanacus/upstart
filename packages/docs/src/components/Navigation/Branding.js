import React from 'react';
import styled from 'styled-components';
import { Stack, Link } from '@deanacus/upstart';
import { Logo } from '../Logo';

const StyledLink = styled(Link)`
  width: 10rem;
`;

export const Branding = () => (
  <Stack>
    <StyledLink href="/">
      <Logo />
    </StyledLink>
  </Stack>
);

export default Branding;
