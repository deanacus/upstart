import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { UnorderedList } from '@deanacus/upstart';

import { MenuGroup } from './MenuGroup';

const query = graphql`{
  allMdx {
    nodes {
      frontmatter {
        title
        menu
        route
      }
    }
  }
}`;

export const Menu = () => {
  const { allMdx: { nodes } } = useStaticQuery(query);
  const groupedNodes = nodes.reduce((acc, cur) => {
    const group = cur.frontmatter.menu !== null ? cur.frontmatter.menu : 'Getting Started';

    if (!acc[group]) {
      acc[group] = [cur.frontmatter];
      return acc;
    }

    acc[group].push(cur.frontmatter);
    return acc;
  }, {});

  return (
    <nav>
      <UnorderedList indent={0} listStyle="none">
        {
          Object.keys(groupedNodes).map((group) => (
            <MenuGroup group={groupedNodes[group]} key={group} title={group} />
          ))
        }
      </UnorderedList>
    </nav>
  );
};

export default Menu;
