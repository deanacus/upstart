// test-utils.js
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
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

const customRender = (ui, options) => render(ui, { wrapper: Wrapper, ...options });

// re-export everything
// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';

// override render method
export { customRender as render };
