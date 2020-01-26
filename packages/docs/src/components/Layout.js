import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Row, Column, Upstart } from '@deanacus/upstart';
import { Base } from './base';
import { typeFaces } from './theme';

import { Navigation } from './Navigation/Navigation';
import { Article } from './Article/Article';
import { DocsStyles } from './GlobalStyle';


export default function Layout({ data: { mdx: { frontmatter: { title, description }, body } } }) {
  return (
    <Upstart customTheme={{ typeFaces }}>
      <DocsStyles />
      <Base>
        <Row>
          <Column cols={2} padding="px-3">
            <Navigation />
          </Column>
          <Column cols={10} align="center">
            <Article title={title} body={body} description={description} />
          </Column>
        </Row>
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
    }
  }
`;
