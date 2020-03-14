import React from 'react';
import styled from 'styled-components';
import { Stack, Link, getMargin } from '@deanacus/upstart';

const StyledLink = styled(Link)`
  margin: auto;
  ${({ theme }) => getMargin('my-3', theme)}
`;

export const Links = () => (
  <Stack>
    <StyledLink isExternal href="https://github.com/deanacus/upstart">Github</StyledLink>
  </Stack>
);

export default Links;
