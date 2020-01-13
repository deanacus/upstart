import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Row, Column, Upstart } from '@deanacus/upstart';
import Base from './base';

import { SideMenu } from './SideMenu';
import { TopNav } from './TopNav';

const ArticleBody = styled.div`
  margin: ${({ theme }) => theme.space[5] / 10}rem 0;
`;

const Title = styled.h1`
  margin-top: 0;
`;

export default function Layout({ data: { mdx: { frontmatter: { title, description }, body } } }) {
  return (
    <Upstart>
      <Base>
        <TopNav />
        <Row>
          <Column cols={2} padding="px-3">
            <SideMenu />
          </Column>
          <Column cols={10} align="center">
            <Column cols={6}>
              <article>
                <Title>{title}</Title>
                <p>{description}</p>
                <ArticleBody>
                  <MDXRenderer>
                    {body}
                  </MDXRenderer>
                </ArticleBody>
              </article>
            </Column>
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
