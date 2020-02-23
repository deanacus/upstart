import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import { useMDXComponents } from '@mdx-js/react';
import { Theme, getRem } from '@deanacus/upstart';

const ayuMirage = {
  plain: {
    color: '#cbccc6',
    fontSize: Theme.fontSizes.sm,
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(92, 103, 115)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'symbol'],
      style: {
        color: 'rgb(186, 230, 126)',
      },
    },
    {
      types: ['char', 'constant'],
      style: {
        color: 'rgb(149, 230, 203)',
      },
    },
    {
      types: ['attr-value'],
      style: {
        color: '#86B300',
      },
    },
    {
      types: ['number', 'builtin'],
      style: {
        color: 'rgb(255, 204, 102)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(203, 204, 198)',
      },
    },
    {
      types: ['operator', 'punctuation'],
      style: {
        color: 'rgb(242, 158, 116)',
      },
    },
    {
      types: ['function', 'attr-name'],
      style: {
        color: 'rgb(255, 213, 128)',
      },
    },
    {
      types: ['tag'],
      style: {
        color: 'rgb(92, 207, 230)',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: 'rgb(166, 204, 112)',
      },
    },
    {
      types: ['changed'],
      style: {
        color: 'rgb(119, 168, 217)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(242, 121, 131)',
      },
    },
  ],
};

const ayuLight = {
  plain: {
    color: '#6c7680',
    backgroundColor: Theme.colors.grey[1],
    fontSize: Theme.fontSizes.sm,
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(171, 176, 182)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'symbol'],
      style: {
        color: 'rgb(134, 179, 0)',
      },
    },
    {
      types: ['char', 'constant'],
      style: {
        color: 'rgb(76, 191, 153)',
      },
    },
    {
      types: ['number', 'builtin'],
      style: {
        color: 'rgb(255, 153, 64)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(108, 118, 128)',
      },
    },
    {
      types: ['operator', 'punctuation'],
      style: {
        color: 'rgb(237, 147, 102)',
      },
    },
    {
      types: ['function', 'attr-name'],
      style: {
        color: 'rgb(242, 174, 73)',
      },
    },
    {
      types: ['tag'],
      style: {
        color: 'rgb(85, 180, 212)',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: 'rgb(153, 191, 77)',
      },
    },
    {
      types: ['changed'],
      style: {
        color: 'rgb(112, 158, 204)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(242, 121, 131)',
      },
    },
  ],
};

export const Preview = ({ children }) => {
  const components = useMDXComponents();
  return (
    <LiveProvider
      language="jsx"
      code={children.trim()}
      transformCode={(code) => `<>${code}</>`}
      scope={components}
      theme={ayuLight}
    >
      <LivePreview
        style={{
          borderColor: Theme.colors.grey[2],
          borderStyle: 'solid',
          borderWidth: '1px',
          borderBottom: 'none',
          borderTopLeftRadius: getRem(Theme.radii.lg, 10),
          borderTopRightRadius: getRem(Theme.radii.lg, 10),
          padding: getRem(Theme.space[3], 10),
        }}
      />
      <LiveEditor
        style={{
          borderBottomLeftRadius: getRem(Theme.radii.lg, 10),
          borderBottomRightRadius: getRem(Theme.radii.lg, 10),
          borderColor: Theme.colors.grey[2],
          borderStyle: 'solid',
          borderWidth: '1px',
          fontFamily: Theme.fonts.monospace,
          padding: getRem(Theme.space[3], 10),
        }}
      />
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
