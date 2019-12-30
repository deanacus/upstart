import React from 'react';
import styled from 'styled-components';

import { Column } from '@deanacus/upstart';

const ColorChip = styled.div`
  background: ${({color}) => color};
  height: 5rem;
  width: 100%;
`

export const ColorBlock = ({color}) => (
  <Column cols={2}  padding="p-2" align="center">
    <ColorChip color={color} />
    {color}
  </Column>
);
