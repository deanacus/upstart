import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledList } from './styled';

export const UnorderedList = ({
  children, listStyle, indent, className,
}) => (
  <ThemeProvider>
    <StyledList
      listStyle={listStyle}
      indent={indent}
      className={className}
    >
      {children}
    </StyledList>
  </ThemeProvider>
);

UnorderedList.propTypes = {
  /** The style of list marker to be used. */
  listStyle: PropTypes.oneOf([
    'none',
    'disc',
    'circle',
    'square',
    PropTypes.string, // Custom marker
  ]),

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

  /** The content of the UnorderedList */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

UnorderedList.defaultProps = {
  listStyle: 'disc',
  indent: 4,
  className: null,
};

export default UnorderedList;
