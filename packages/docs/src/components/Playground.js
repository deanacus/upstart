import React from 'react'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import {mdx} from '@mdx-js/react'
import {Button} from '@deanacus/upstart'


export const Playground = ({children}) => {

const code = () => (
  <>
    '/** @jsx mdx */'
    <Button>Test</Button>
  </>
)

return (
  <div style={{marginTop: '40px'}}>
    <LiveProvider
      code={code}
      scope={{mdx}}
      noInline={true}
    >
      <LivePreview />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  </div>
);
}