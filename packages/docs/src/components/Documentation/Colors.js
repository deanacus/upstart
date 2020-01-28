import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { Row } from '@deanacus/upstart';
import { ColorBlock } from './ColorBlock';


export const Colors = ({ color }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Row canWrap>
      {
        colors[color].map((clr) => (
          <ColorBlock color={clr} key={clr} />
        ))
      }
    </Row>
  );
};

Colors.propTypes = {
  color: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Colors;
