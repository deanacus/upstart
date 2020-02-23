import React from 'react';
import { Flex, Link, Input } from '@deanacus/upstart';

export const Branding = () => (
  <Flex justify="center" direction="column">
    <Link href="/">
      <span role="img" aria-label="Pointing up emoji">☝️</span>Upstart
    </Link>
    <Input type="search" label="Search" id="search" />
  </Flex>
);

export default Branding;
