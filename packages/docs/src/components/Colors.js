import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Row } from '@deanacus/upstart';
import { ColorBlock } from './ColorBlock';


export const Colors = ({color}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Row canWrap>
      {
        colors[color].reverse().map(color => (
          <ColorBlock color={color} key={color} />
        ))
      }
    </Row>
  )
}
