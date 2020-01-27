import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { renderHook as tlRenderHook } from '@testing-library/react-hooks';
// eslint-disable-next-line import/no-extraneous-dependencies
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

const renderHook = (callback, options) => tlRenderHook(callback, { wrapper: Wrapper, ...options });

// re-export everything
// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react-hooks';

// override render method
export { renderHook };
