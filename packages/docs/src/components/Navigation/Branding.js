import React from 'react';
import { Column, Link } from '@deanacus/upstart';

const Logo = () => (
  <Link href="/"><span role="img" aria-label="Pointing up emoji">☝️</span>Upstart</Link>
);

export const Branding = () => (
  <Column align="center" padding="py-5">
    <Logo />
  </Column>
);

export default Branding;
