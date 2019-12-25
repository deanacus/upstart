import React from 'react'
import {MDXProvider} from '@mdx-js/react'

const components = {
}

export default props => (
  <MDXProvider components={components}>
      {props.children}
  </MDXProvider>
)