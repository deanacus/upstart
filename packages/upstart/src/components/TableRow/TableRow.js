import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledTRow } from './styled';

export const TableRow = ({ children, padding, className }) => (
  <ThemeProvider>
    <StyledTRow padding={padding} className={className}>
      {children}
    </StyledTRow>
  </ThemeProvider>
);

TableRow.propTypes = {

  /** The content of the TableRow */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The padding string to be applied to the TableRow. */
  padding: PropTypes.string,
};

TableRow.defaultProps = {
  className: null,
  padding: null,
};

export default TableRow;
