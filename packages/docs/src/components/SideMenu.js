import React from 'react';
import styled, { css } from 'styled-components';
import { StaticQuery, Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

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
`;

const Section = styled.section`
  margin-bottom: 3.2rem;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => css`${theme.fontSizes.sm / theme.rootVal}${theme.preferredUnit}`};
  font-weight: ${({ theme }) => theme.fontWeights.body};
  letter-spacing: .25rem;
  margin: 0 0 .8rem;
  text-transform: uppercase;
`;

const Menu = ({ allSitePage: { nodes }, site: { siteMetadata: { menu } } }) => {
  const activeItems = nodes.map((node) => node.path);

  return (
    <nav>
      {
        menu.map(
          ({ label, children }) => (
            <Section key={label}>
              <SectionTitle>{label}</SectionTitle>
              <UnorderedList listStyle="none" indent="0">
                {
                  children.map(
                    ({ childLabel, route }) => (
                      activeItems.includes(route) ? (
                        <ListItem key={route}><Link to={route}>{childLabel}</Link></ListItem>
                      ) : (
                        <ListItem key={route}>{childLabel}</ListItem>
                      )
                    ),
                  )
                }
              </UnorderedList>
            </Section>
          ),
        )
      }
    </nav>
  );
};

Menu.propTypes = {
  allSitePage: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      menu: PropTypes.arrayOf(
        PropTypes.shape({}),
      ),
    }),
  }).isRequired,
};

export const SideMenu = () => (
  <StaticQuery
    query={query}
    render={Menu}
  />
);

export default SideMenu;
