import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ListItem,
  List,
  getRem,
} from '@deanacus/upstart';
import { Link } from 'gatsby';

const GroupTitle = styled.h2`
  font-size: ${({ theme }) => getRem(theme.fontSizes.sm, theme.rootVal)};
  font-weight: normal;
  letter-spacing: .5rem;
  margin: 0;
  text-transform: uppercase;
`;

export const MenuGroup = ({ group, title }) => (
  <ListItem padding="py-3">
    <GroupTitle>{title}</GroupTitle>
    <List marker="none" padding="pt-3">
      {
        group.map((node) => (
          <ListItem key={node.route}>
            <Link to={node.route}>{node.title}</Link>
          </ListItem>
        ))
      }
    </List>
  </ListItem>
);

MenuGroup.propTypes = {
  group: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuGroup;
