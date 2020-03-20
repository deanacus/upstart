import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { List, Separator } from '@deanacus/upstart';

import { MenuGroup } from './MenuGroup';

const query = graphql`{
  allMdx(
    sort: {order: ASC, fields: frontmatter___title}
  ) {
    nodes {
      frontmatter {
        title
      }
      fields {
        menu
        slug
      }
    }
  }
}`;

const Nav = styled.nav`
  overflow-y: auto;
`;

export const Menu = () => {
  const { allMdx: { nodes } } = useStaticQuery(query);
  const groupedNodes = nodes.reduce((acc, cur) => {
    const group = cur.fields.menu;

    if (!acc[group]) {
      acc[group] = [{ ...cur.frontmatter, ...cur.fields }];
      return acc;
    }

    acc[group] = [...acc[group], { ...cur.frontmatter, ...cur.fields }].sort();
    return acc;
  }, {});

  return (
    <Nav>
      <List marker="none">
        <MenuGroup group={groupedNodes['getting started']} title="Getting Started" />
        <Separator />
        <MenuGroup group={groupedNodes.guides} title="Guides and Recipes" />
        <Separator />
        <MenuGroup group={groupedNodes.tokens} title="Tokens" />
        <Separator />
        <MenuGroup group={groupedNodes.layout} title="Layout" />
        <Separator />
        <MenuGroup group={groupedNodes.components} title="Components" />
      </List>
    </Nav>
  );
};

export default Menu;
