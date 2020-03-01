import React from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './styled';

export const List = ({
  children, marker, className, isNumbered, padding,
}) => {
  const listType = isNumbered ? 'ol' : 'ul';
  const listStyle = marker;
  return (
    <StyledList
      as={listType}
      listStyle={listStyle}
      className={className}
      padding={padding}
    >
      {children}
    </StyledList>
  );
};

List.propTypes = {

  /** The content of the List */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,


  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** Whether or not this is a number list */
  isNumbered: PropTypes.bool,

  /**
   * The style of list marker to be used. Any valid CSS listStyleType can be
   * used, or a custom marker, if required
   */
  marker: PropTypes.string,

  /** The padding value to be applied to the List. */
  padding: PropTypes.string,
};

List.defaultProps = {
  className: null,
  isNumbered: false,
  marker: null,
  padding: null,
};

export default List;
