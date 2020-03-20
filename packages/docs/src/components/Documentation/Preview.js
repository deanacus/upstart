import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import { useMDXComponents } from '@mdx-js/react';
import { Theme, getRem, getPadding } from '@deanacus/upstart';

const ayuLight = {
  plain: {
    color: '#6c7680',
    backgroundColor: Theme.colors.grey[1],
    fontSize: Theme.fontSize.sm,
    fontFamily: Theme.fonts.monospace,
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

const PreviewContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey[2]};
  border-radius: ${({ theme }) => getRem(theme.borderRadius.lg)};
  overflow: hidden;
`;

const StyledPreview = styled(LivePreview)`
  ${({ theme }) => getPadding('p-4', theme)};
`;

export const Preview = ({ children, className }) => {
  const components = useMDXComponents();
  const language = className.replace('language-', '');
  return (
    <LiveProvider
      language={language}
      code={children.trim()}
      transformCode={(code) => `<>${code}</>`}
      scope={components}
      theme={ayuLight}
    >
      <PreviewContainer>
        {language === 'jsx' && <StyledPreview />}
        <LiveEditor />
      </PreviewContainer>
    </LiveProvider>
  );
};

Preview.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string,
};

Preview.defaultProps = {
  className: 'language-jsx',
};

export default Preview;
