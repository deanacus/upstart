import React from 'react'
import { MDXProvider } from '@mdx-js/react';
import { Preview } from './Preview';

import * as Upstart from '@deanacus/upstart';

const components = {
  ...Upstart,
  code: Preview,
}

export default props => (
  <MDXProvider components={components}>
      {props.children}
  </MDXProvider>
)