import React from "react"
import styled from 'styled-components';
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Row, Column, Upstart } from '@deanacus/upstart';
import Base from './base'

import { SideMenu } from './SideMenu'
import { TopNav } from "./TopNav";

const ArticleBody = styled.div`
  margin: ${({theme}) => theme.space[5] / 10}rem 0;
`;

export default function Layout({ data: { mdx } }) {
  return (
    <Upstart>
      <Base>
        <TopNav />
        <Row>
          <Column cols={2}>
            <SideMenu/>
          </Column>
          <Column cols={10} align="center">
            <Column cols={6}>
              <article>
                <h1>{mdx.frontmatter.title}</h1>
                <p>{mdx.frontmatter.description}</p>
                <ArticleBody>
                  <MDXRenderer>
                    {mdx.body}
                  </MDXRenderer>
                </ArticleBody>
              </article>
            </Column>
          </Column>
        </Row>
      </Base>
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