import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { StyledTable } from './styled';

export const Table = ({ children, className }) => (
  <ThemeProvider>
    <StyledTable className={className}>
      <tbody>
        <tr>
          <td>Test</td>
        </tr>
      </tbody>
    </StyledTable>
  </ThemeProvider>
);

Table.propTypes = {
  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,
  /** The content of the Table */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Table.defaultProps = {
  className: null,
};

export default Table;
