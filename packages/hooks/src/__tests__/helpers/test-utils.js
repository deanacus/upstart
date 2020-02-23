import React from 'react';
import PropTypes from 'prop-types';
import * as tlrh from '@testing-library/react-hooks';
import { Upstart } from '@deanacus/upstart';

const Wrapper = ({ children }) => (
  <Upstart>
    {children}
  </Upstart>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

const renderHook = (callback, options) => (
  tlrh.renderHook(callback, { wrapper: Wrapper, ...options })
);

export * from '@testing-library/react-hooks';

export { renderHook };
