import React from 'react';
import PropTypes from 'prop-types';
import { UnorderedList } from './UnorderedList';
import { OrderedList } from './OrderedList';

export const List = ({ children, ordered }) => {
  const isOrdered = ordered;

  return isOrdered
    ? (
      <OrderedList>
        {children}
      </OrderedList>
    ) : (
      <UnorderedList>
        {children}
      </UnorderedList>
    );
};

List.propTypes = {

  /** The content of the List */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** Render an ordered list */
  ordered: PropTypes.bool,
};

List.defaultProps = {
  ordered: false,
};

export default List;
