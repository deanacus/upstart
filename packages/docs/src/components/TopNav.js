import React from 'react';

import {
  Row, Button, Column,
} from '@deanacus/upstart';

export const TopNav = () => (
  <Row justify="between" align="center" padding="py-3">
    <Column padding="p-4">
      <div><span role="img" aria-label="Pointing up emoji">☝️</span>Upstart</div>
    </Column>
    <Column padding="p-4">
      <Button href="https://github.com/deanacus/upstart" size="sm" isOutline>Github</Button>
    </Column>
  </Row>
);

export default TopNav;
