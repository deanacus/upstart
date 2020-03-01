import React from 'react';
import PropTypes from 'prop-types';
import { StyledListItem } from './styled';

export const ListItem = ({ children, padding, className }) => (
  <StyledListItem padding={padding} className={className}>
    {children}
  </StyledListItem>
);

ListItem.propTypes = {

  /** The content of the ListItem */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  padding: PropTypes.string,
};

ListItem.defaultProps = {
  className: null,
  padding: null,
};

export default ListItem;
