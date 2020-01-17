import React from 'react';
import PropTypes from 'prop-types';

import { VerticalSeparator, HorizontalSeparator } from './styled';

export const Separator = ({ vertical }) => {
  if (vertical) {
    return <VerticalSeparator />;
  }
  return <HorizontalSeparator />;
};

Separator.propTypes = {
  vertical: PropTypes.bool,
};

Separator.defaultProps = {
  vertical: false,
};

export default Separator;
