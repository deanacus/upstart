import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { UnorderedList } from '../UnorderedList/UnorderedList';
import { OrderedList } from '../OrderedList/OrderedList';

export const List = ({
  children,
  ordered,
  indent,
  className,
  ...rest
}) => (ordered
  ? (
    <ThemeProvider>
      <OrderedList indent={indent} listStyle={rest.listStyle} className={className}>
        {children}
      </OrderedList>
    </ThemeProvider>
  ) : (
    <ThemeProvider>
      <UnorderedList indent={indent} listStyle={rest.listStyle} className={className}>
        {children}
      </UnorderedList>
    </ThemeProvider>
  ));

List.propTypes = {
  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** How far to indent the list from the left */
  indent: PropTypes.oneOf([
    0,
    1,
    2,
    3,
    4,
    5,
  ]),

  /** The content of the List */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** Render an ordered list */
  ordered: PropTypes.bool,
};

List.defaultProps = {
  className: null,
  ordered: false,
  indent: '4',
};

export default List;
