import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, UnorderedList } from '@deanacus/upstart';
import { Link } from 'gatsby';

export const MenuGroup = ({ group, title }) => (
  <ListItem>
    <h2>{title}</h2>
    <UnorderedList indent={0} listStyle="none">
      {
        group.map((node) => (
          <ListItem key={node.route}>
            <Link to={node.route}>{node.title}</Link>
          </ListItem>
        ))
      }
    </UnorderedList>
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
