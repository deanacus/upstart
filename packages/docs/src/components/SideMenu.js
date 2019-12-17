import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';

export const SideMenu = () => (
  <StaticQuery
    query={
      graphql`
        query MenuItems{
            allSitePage {
              nodes {
                path
              }
            }
            site {
              siteMetadata {
                menuItems {
                  label
                  menu
                  route
                }
              }
            }
        }`
    }
    render={data => {
      const groupedItems = data.site.siteMetadata.menuItems.reduce((acc, curr) => {
        if (!acc[curr.menu]) {
          acc[curr.menu] = [curr]
          return acc;
        }
        acc[curr.menu] = [...acc[curr.menu], curr]
        return acc
      }, {})
      const activeRoutes = data.allSitePage.nodes.reduce((acc,curr) => [...acc, curr.path], [])
      console.log(activeRoutes)
      return (<nav>
        <section>
          <ul>
            {
              data.site.siteMetadata.menuItems.map((item) => (
                activeRoutes.includes(item.route) ? (
                  <Link to={item.route} key={item.route}><li>{item.label}</li></Link>
                ):(
                  <li key={item.route}>{item.label}</li>
                )
              )
              )
            }
          </ul>
        </section>
      </nav>)
    }}
  />
)