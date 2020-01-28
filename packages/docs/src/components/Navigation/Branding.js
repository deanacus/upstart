import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Button, Column, Link, getPadding,
} from '@deanacus/upstart';

const LinksBox = styled.div`
  ${({ theme }) => getPadding('py-3', theme)}
`;

const Logo = () => (
  <Link href="/"><span role="img" aria-label="Pointing up emoji">☝️</span>Upstart</Link>
);

export const Branding = ({ links }) => (
  <header>
    <Column align="center">
      <Logo />
      <LinksBox>
        {links.map((link) => <Button isOutline size="sm" key={link.url} href={link.url}>{link.label}</Button>)}
      </LinksBox>
    </Column>
  </header>
);

Branding.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
};

Branding.defaultProps = {
  links: [
    {
      label: 'Github',
      url: 'https://github.com/deanacus/upstart',
    },
  ],
};

export default Branding;
