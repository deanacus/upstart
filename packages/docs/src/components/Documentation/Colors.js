import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { Stack } from '@deanacus/upstart';
import { ColorBlock } from './ColorBlock';


export const Colors = ({ color }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Stack horizontal>
      {
        colors[color].map((clr) => (
          <ColorBlock color={clr} key={clr} />
        ))
      }
    </Stack>
  );
};

Colors.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Colors;
