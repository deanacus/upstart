import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { VerticalSeparator, HorizontalSeparator } from './styled';

export const Separator = ({ isVertical, className }) => (
  <ThemeProvider>
    { isVertical ? <VerticalSeparator /> : <HorizontalSeparator />}
  </ThemeProvider>
);

Separator.propTypes = {
  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,
  isVertical: PropTypes.bool,
};

Separator.defaultProps = {
  className: null,
  isVertical: false,
};

export default Separator;
