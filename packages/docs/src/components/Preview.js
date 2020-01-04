import React, { useContext } from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import { useMDXComponents, mdx } from '@mdx-js/react';
import { ThemeContext } from 'styled-components';

export const Preview = ({ children }) => {
  const components = useMDXComponents();
  const { colors, radii } = useContext(ThemeContext);

  const theme = {
    plain: {
      color: colors.grey[8],
      backgroundColor: colors.grey[0],
      fontSize: '14px',
    },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata'],
        style: {
          color: colors.grey[5],
          fontStyle: 'italic',
        },
      },
      {
        types: ['string', 'attr-value'],
        style: {
          color: colors.primary[4],
        },
      },
      {
        types: ['punctuation', 'operator'],
        style: {
          color: colors.primary[9],
        },
      },
      {
        types: [
          'entity',
          'url',
          'symbol',
          'number',
          'boolean',
          'variable',
          'constant',
          'property',
          'regex',
          'inserted',
        ],
        style: {
          color: colors.primary[8],
        },
      },
      {
        types: ['atrule', 'keyword', 'attr-name', 'selector'],
        style: {
          color: colors.secondary[9],
        },
      },
      {
        types: ['function', 'deleted', 'tag'],
        style: {
          color: colors.primary[3],
        },
      },
      {
        types: ['function-variable'],
        style: {
          color: colors.secondary[9],
        },
      },
      {
        types: ['tag', 'selector', 'keyword'],
        style: {
          color: colors.primary[9],
        },
      },
    ],
  };

  const liveProviderProps = {
    transformCode: code => `<>${code}</>`,
    scope: { mdx, ...components },
  };

  return (
    <LiveProvider language="jsx" code={children.trim()} {...liveProviderProps}  theme={theme}>
        <LivePreview style={{
          backgroundColor: colors.grey[0],
          border: `1px solid ${colors.grey[3]}`,
          borderTopLeftRadius: radii[2],
          borderTopRightRadius: radii[2],
          display: 'flex',
          justifyContent: 'center',
          padding: '3rem 0',
        }}/>
        <LiveEditor style={{
          borderBottomLeftRadius: radii[2],
          borderBottomRightRadius: radii[2],
          border: `1px solid ${colors.grey[3]}`,
          borderTop: 'none',
        }}/>
    </LiveProvider>
  );
};