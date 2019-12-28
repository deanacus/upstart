import React from 'react';
import styled from 'styled-components';
import { Row, Column, Button, Flex } from '@deanacus/upstart';

const HeaderRow = styled(Row)`
  border: 3px solid ${({theme}) => theme.colors.grey[500]};
`;

export const TopNav = () => (
  <HeaderRow justify="between" align="center" padding="py-3">
    <Column>
      [LOGO]
    </Column>
    <Flex spacing={2}>
      <Button href="https://github.com/deanacus/upstart" outline>Github</Button>
      <Button type="button" outline>DarkMode</Button>
    </Flex>
  </HeaderRow>
)