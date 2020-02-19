import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import * as Upstart from '@deanacus/upstart';
import { Preview } from './Preview';
import { Pre } from './MDX/Pre';

const components = {
  ...Upstart,
  pre: Pre,
  code: Preview,
};

export const Base = ({ children }) => (
  <MDXProvider components={components}>
    {children}
  </MDXProvider>
);

Base.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Base;
