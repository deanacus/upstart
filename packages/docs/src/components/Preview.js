import React from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import { useMDXComponents } from '@mdx-js/react';

export const Preview = ({ children }) => {
  const components = useMDXComponents();
  return (
    <LiveProvider
      language="jsx"
      code={children.trim()}
      transformCode={code => `<>${code}</>`}
      scope={components}
    >
      <LivePreview />
      <LiveEditor />
    </LiveProvider>
  );
};