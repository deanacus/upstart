import React from 'react';
import styled from 'styled-components';
import { Stack, Link, getMargin } from '@deanacus/upstart';
import { Logo } from '../Logo';

const StyledLink = styled(Link)`
  max-width: 10rem;
  margin: auto;
  ${({ theme }) => getMargin('my-3', theme)}
`;

export const Branding = () => (
  <Stack>
    <StyledLink href="/">
      <Logo />
    </StyledLink>
  </Stack>
);

export default Branding;
