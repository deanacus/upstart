import React from 'react';
import styled from 'styled-components';
import { Row, Button, Flex, Column } from '@deanacus/upstart';

const HeaderRow = styled(Row)`
  border: 3px solid ${({theme}) => theme.colors.grey[500]};
`;

export const TopNav = () => (
  <HeaderRow justify="between" align="center" padding="py-3">
    <Column padding="p-4">
      <div><span role="img" aria-label="Pointing up emoji">☝️</span>Upstart</div>
    </Column>
    <Column padding="p-4">
      <Button href="https://github.com/deanacus/upstart" size="sm" isOutline>Github</Button>
    </Column>
  </HeaderRow>
)