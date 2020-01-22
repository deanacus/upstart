import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { Item } from './styled';

export const GridItem = ({
  span, start, end, children, className,
}) => (
  <ThemeProvider>
    <Item
      span={span}
      start={start}
      end={end}
      className={className}
    >
      {children}
    </Item>
  </ThemeProvider>
);

GridItem.propTypes = {

  /** The children of the Grid */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The grid line the item will end on */
  end: PropTypes.number,

  /** How many grid tracks the item will span */
  span: PropTypes.number,

  /** The grid line the item will start on */
  start: PropTypes.number,

};

GridItem.defaultProps = {
  className: null,
  end: null,
  span: null,
  start: null,
};

export default GridItem;
