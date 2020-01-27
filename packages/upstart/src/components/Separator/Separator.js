import React from 'react';
import PropTypes from 'prop-types';

import { VerticalSeparator, HorizontalSeparator } from './styled';

export const Separator = ({ isVertical, className }) => (isVertical ? (
  <VerticalSeparator className={className} />
) : (
  <HorizontalSeparator className={className} />
));

Separator.propTypes = {
  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** Whether or not to render a vertical separator */
  isVertical: PropTypes.bool,
};

Separator.defaultProps = {
  className: null,
  isVertical: false,
};

export default Separator;
