import React from "react"
import styled from 'styled-components';
import { graphql } from "gatsby"
import { MDXContext } from '@mdx-js/react'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container, Row, Column, Upstart } from '@deanacus/upstart';

import Layout from './layout';
import {SideMenu} from './SideMenu'

const Hero = styled.header`
  align-items: center;
  background: ${({theme}) => theme.colors.grey[800]};
  /* I need more colors on the theme */
  color: ${({theme}) => theme.colors.grey[200]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({theme}) => theme.space.xxxxl / 10}rem;

  h1 {
    margin: 0;
  }
`;

const ArticleBody = styled.div`
  margin: ${({theme}) => theme.space.xxxxl / 10}rem 0;
`;

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Upstart>
      <Container>
        <Row>
          <Column cols={3}>
            <SideMenu/>
          </Column>
          <Column cols={9}>
            <article>
              <Hero>
                <h1>{mdx.frontmatter.title}</h1>
                <p>{mdx.frontmatter.description}</p>
              </Hero>
              <Row justify="center">
                <Column cols={6}>
                  <ArticleBody>
                    <MDXRenderer>
                      {mdx.body}
                    </MDXRenderer>
                  </ArticleBody>
                </Column>
              </Row>
            </article>
          </Column>
        </Row>
      </Container>
    </Upstart>
  )
}

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
`