import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Upstart, Container, Row, Column } from '@deanacus/upstart';

import {SideMenu} from './SideMenu'

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Upstart>
      <Container>
        <Row>
          <SideMenu/>
          <Row justify="center">
            <Column cols={6}>
              <MDXRenderer>
              {mdx.body}
              </MDXRenderer>
            </Column>
          </Row>
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
      }
    }
  }
`