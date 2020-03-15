import React from 'react';
import PropTypes from 'prop-types';
import * as tlr from '@testing-library/react';
import { UpstartProvider } from '../../components/UpstartProvider/UpstartProvider';

const Wrapper = ({ children }) => (
  <UpstartProvider>
    {children}
  </UpstartProvider>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export * from '@testing-library/react';

export const render = (ui, options) => tlr.render(ui, { wrapper: Wrapper, ...options });

export const { fireEvent } = tlr;
