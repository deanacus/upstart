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

  /** The content of the UnorderedList */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

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

  /** The style of list marker to be used. */
  listStyle: PropTypes.oneOf([
    'none',
    'disc',
    'circle',
    'square',
    PropTypes.string, // Custom marker
  ]),
};

UnorderedList.defaultProps = {
  className: null,
  indent: 4,
  listStyle: 'disc',
};

export default UnorderedList;
