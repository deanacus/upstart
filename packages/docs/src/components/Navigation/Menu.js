import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { List, Separator } from '@deanacus/upstart';

import { MenuGroup } from './MenuGroup';

const query = graphql`{
  allMdx {
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
  overflow: scroll;
`;

export const Menu = () => {
  const { allMdx: { nodes } } = useStaticQuery(query);
  const groupedNodes = nodes.reduce((acc, cur) => {
    const group = cur.fields.menu;

    if (!acc[group]) {
      acc[group] = [{ ...cur.frontmatter, ...cur.fields }];
      return acc;
    }

    acc[group].push({ ...cur.frontmatter, ...cur.fields });
    return acc;
  }, {});

  return (
    <Nav>
      <List marker="none">
        {
          Object.keys(groupedNodes).map((group, ind) => (
            <React.Fragment key={group}>
              {ind !== 0 && <Separator />}
              <MenuGroup group={groupedNodes[group]} title={group} />
            </React.Fragment>
          ))
        }
      </List>
    </Nav>
  );
};

export default Menu;
