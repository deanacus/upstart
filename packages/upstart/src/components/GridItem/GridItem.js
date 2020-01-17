import React from 'react';
import PropTypes from 'prop-types';

import { Item } from './styled';

export const GridItem = ({
  span, start, end, children,
}) => (
  <Item span={span} start={start} end={end}>
    {children}
  </Item>
);

GridItem.propTypes = {

  /** How many grid tracks the item will span */
  span: PropTypes.number,

  /** The grid line the item will start on */
  start: PropTypes.number,

  /** The grid line the item will end on */
  end: PropTypes.number,

  /** The children of the Grid */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

GridItem.defaultProps = {
  span: null,
  start: null,
  end: null,
};

export default GridItem;
