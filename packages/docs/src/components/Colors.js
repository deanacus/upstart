import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { Flex } from '@deanacus/upstart';

const ColorChip = styled.div`
  background: ${({color}) => color};
  height: 5rem;
  width: 5rem;
`

export const Colors = ({color}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Flex margin="mx-2">
      {
        colors[color].reverse().map(color => (
          <div>
            <ColorChip color={color} />
            {color}
          </div>
        ))
      }
    </Flex>
  )
}
