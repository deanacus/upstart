// test-utils.js
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as tlr from '@testing-library/react';
import { Upstart } from '../components/GlobalStyle/GlobalStyle';

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

// re-export everything
// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';

export const render = (ui, options) => tlr.render(ui, { wrapper: Wrapper, ...options });

export const { fireEvent } = tlr;
