import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { UpstartProvider } from '@deanacus/upstart';
import { Base } from './Base';
import { customTheme } from './theme';

import { Navigation } from './Navigation/Navigation';
import { Article } from './Article/Article';
import { DocsStyles } from './GlobalStyle';


export default function Layout({
  data: {
    mdx: {
      frontmatter: {
        title, description,
      }, body,
      fields: {
        slug,
        menu,
      },
    },
  },
}) {
  return (
    <UpstartProvider customTheme={customTheme}>
      <DocsStyles />
      <Base>
        <Navigation />
        <Article
          title={title}
          body={body}
          description={description}
          menu={menu}
        />
      </Base>
    </UpstartProvider>
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
      }),
      fields: PropTypes.shape({
        menu: PropTypes.string,
        slug: PropTypes.string,
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
        description
      }
      fields {
        slug,
        menu
      }
    }
  }
`;
