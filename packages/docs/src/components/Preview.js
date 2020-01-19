import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import { useMDXComponents } from '@mdx-js/react';

export const Preview = ({ children }) => {
  const components = useMDXComponents();
  return (
    <LiveProvider
      language="jsx"
      code={children.trim()}
      transformCode={(code) => `<>${code}</>`}
      scope={components}
    >
      <LivePreview />
      <LiveEditor />
    </LiveProvider>
  );
};

Preview.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Preview;
