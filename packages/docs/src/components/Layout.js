import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Upstart } from '@deanacus/upstart';
import { Base } from './Base';
import { customTheme } from './theme';

import { Navigation } from './Navigation/Navigation';
import { Article } from './Article/Article';
import { DocsStyles } from './GlobalStyle';


export default function Layout({
  data: {
    mdx: {
      frontmatter: {
        title, menu, description, packageName, importName,
      }, body,
    },
  },
}) {
  return (
    <Upstart customTheme={customTheme}>
      <DocsStyles />
      <Base>
        <Navigation />
        <Article
          title={title}
          body={body}
          description={description}
          menu={menu}
          packageName={packageName}
          importName={importName}
        />
      </Base>
    </Upstart>
  );
}

Layout.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      id: PropTypes.string,
      body: PropTypes.node,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        menu: PropTypes.string,
        packageName: PropTypes.string,
        importName: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query DocsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        menu
        route
        description
        packageName
        importName
      }
    }
  }
`;
