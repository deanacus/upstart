import React from 'react';
import { Flex, Link } from '@deanacus/upstart';

export const Branding = () => (
  <Flex justify="center" direction="column">
    <Link href="/">
      <span role="img" aria-label="Pointing up emoji">☝️</span>Upstart
    </Link>
  </Flex>
);

export default Branding;
