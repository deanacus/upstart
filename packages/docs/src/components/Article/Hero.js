import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getPadding } from '@deanacus/upstart';


const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.grey[7]};
  color: ${({ theme }) => theme.colors.grey[1]};
  display: flex;
  flex-direction: column;
  ${({ theme }) => getPadding('py-5', theme)};
  ${({ theme }) => getPadding('pl-5', theme)};
  width: 100%;

  *:first-child {
    margin-top: 0;
  }
`;

export const Hero = ({ children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
);

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Hero;
