import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledTHead } from './styled';

export const TableHead = ({ children, padding, className }) => (
  <ThemeProvider>
    <StyledTHead padding={padding}>
      <tr>
        {children}
      </tr>
    </StyledTHead>
  </ThemeProvider>
);

TableHead.propTypes = {

  /** The padding string to be applied to the TableRow. */
  padding: PropTypes.string,

  /** The children of the TableHead */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,
};

TableHead.defaultProps = {
  padding: null,
  className: null,
};

export default TableHead;
