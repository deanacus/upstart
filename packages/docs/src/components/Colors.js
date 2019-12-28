import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { Flex } from '@deanacus/upstart';

const ColorBlock = styled.div`
  background: ${({bg}) => bg};
  border: 1px solid ${({theme}) => theme.colors.grey[300]}
  min-height: 5rem;
  min-width: 5rem;
`;

export const Colors = () => {
  const theme = useContext(ThemeContext);

  const singleColors = Object.keys(theme.colors).filter( color => typeof theme.colors[color] === 'string');
  const paletteColors = Object.keys(theme.colors).filter( color => typeof theme.colors[color] !== 'string');

  return <>
    <Flex align="stretch" direction="column" isColumn spacing={2}>
      <h3>Base Colors</h3>
      {
        singleColors.map( color => (
          <Flex spacing={2}>
            <ColorBlock bg={theme.colors[color]} />
            <div>
              {color}
              <br />
              <code>{theme.colors[color]}</code>
            </div>
          </Flex>
        ))
      }
    </Flex>
    {
      paletteColors.map( color => (
        <>
          <h3>{color}</h3>
          <Flex align="stretch" direction="column" isColumn spacing={2}>
            {
              Object.keys(theme.colors[color]).map(shade =>
                <Flex spacing={2}>
                  <ColorBlock bg={theme.colors[color][shade]} />
                  <div>
                    {color} {shade}
                    <br />
                    <code>{theme.colors[color][shade]}</code>
                  </div>
                </Flex>
              )
            }
          </Flex>
        </>
      ))
    }
    {/* {
      Object.keys(theme.colors).map( color => {
        return Object.keys(theme.colors[color]).map(shade => (
          <div>
            <ColorBlock bg={theme.colors[color][shade]} />
            {color} {shade}
          </div>
        ))
      })
    } */}
  </>
}
