import React from 'react';
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

const Menu = ({allSitePage: {nodes}, site: {siteMetadata: {menu}}}) => {
  const activeItems = nodes.map(node => node.path);

  return (
    <nav>
      {
        menu.map(
            ({label, children}) => (
            <section key={label}>
              <h5>{label}</h5>
              <UnorderedList listStyle="none">
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
            </section>
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