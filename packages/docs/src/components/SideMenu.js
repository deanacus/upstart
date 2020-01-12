import React from 'react';
import styled from 'styled-components';
import { StaticQuery, Link, graphql } from 'gatsby';

import { UnorderedList, ListItem } from '@deanacus/upstart';

const query = graphql`
  query{
    allSitePage {
      nodes {
        path
      }
    }
    site {
      siteMetadata {
        menu {
          label
          route
          children {
            label
            route
          }
        }
      }
    }
  }
`

const Section = styled.section`
  margin-bottom: 3.2rem;
`;

const SectionTitle = styled.h2`
  font-size: ${({theme}) => `${theme.fontSizes.sm / theme.rootVal}${theme.preferredUnit}`};
  font-weight: ${({theme}) => theme.fontWeights.body};
  letter-spacing: .25rem;
  margin: 0 0 .8rem;
  text-transform: uppercase;
`;

const Menu = ({allSitePage: {nodes}, site: {siteMetadata: {menu}}}) => {
  const activeItems = nodes.map(node => node.path);

  return (
    <nav>
      {
        menu.map(
            ({label, children}) => (
            <Section key={label}>
              <SectionTitle>{label}</SectionTitle>
              <UnorderedList listStyle="none" indent="0">
                {
                  children.map(
                    ({label, route}) => (
                      activeItems.includes(route) ? (
                      <ListItem key={route}><Link to={route}>{label}</Link></ListItem>
                      ):(
                        <ListItem key={route}>{label}</ListItem>
                      )
                    )
                  )
                }
              </UnorderedList>
            </Section>
          )
        )
      }
    </nav>
  )

}

// data => {
//   const groupedItems = data.site.siteMetadata.menuItems.reduce((acc, curr) => {
//     if (!acc[curr.menu]) {
//       acc[curr.menu] = [curr]
//       return acc;
//     }
//     acc[curr.menu] = [...acc[curr.menu], curr]
//     return acc
//   }, {})

//   const groups = Object.keys(groupedItems).map(
//     group => groupedItems['group']
//   );

//   console.log(groupedItems, groups)


//   const activeRoutes = data.allSitePage.nodes.reduce((acc,curr) => [...acc, curr.path], [])



//   return (<nav>
//     <section>
//       <ul>
//         {
//           data.site.siteMetadata.menuItems.map((item) => (
//             activeRoutes.includes(item.route) ? (
//               <Link to={item.route} key={item.route}><li>{item.label}</li></Link>
//             ):(
//               <li key={item.route}>{item.label}</li>
//             )
//           )
//           )
//         }
//       </ul>
//     </section>
//   </nav>)
// }

export const SideMenu = () => (
  <StaticQuery
    query={query}
    render={Menu}
  />
)