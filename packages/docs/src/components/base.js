import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import * as Upstart from '@deanacus/upstart';
import { Preview } from './Preview';


const components = {
  ...Upstart,
  code: Preview,
};

export default (props) => (
  <MDXProvider components={components}>
    {props.children}
  </MDXProvider>
);
