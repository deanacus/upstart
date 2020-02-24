import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  height: ${({ theme, size }) => `${size ? theme.fontSizes[size] : theme.fontSizes.sm}px`};
  width: ${({ theme, size }) => `${size ? theme.fontSizes[size] : theme.fontSizes.sm}px`};
  margin-left: .5rem;
`;

const ExternalIcon = ({ size }) => (
  <StyledIcon viewBox="0 0 16 16" size={size}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6036 1H14.75C14.8881 1 15 1.11193 15 1.25V5.39645C15 5.61917 14.7307 5.73072 14.5732 5.57322L13.0303 4.03033L9.28033 7.78033C8.98744 8.07322 8.51256 8.07322 8.21967 7.78033C7.92678 7.48744 7.92678 7.01256 8.21967 6.71967L11.9697 2.96967L10.4268 1.42678C10.2693 1.26929 10.3808 1 10.6036 1ZM3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V8.75C14 8.33579 13.6642 8 13.25 8C12.8358 8 12.5 8.33579 12.5 8.75V12.25C12.5 12.3881 12.3881 12.5 12.25 12.5H3.75C3.61193 12.5 3.5 12.3881 3.5 12.25V3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H7.25C7.66421 3.5 8 3.16421 8 2.75C8 2.33579 7.66421 2 7.25 2H3.75Z"
    />
  </StyledIcon>
);

ExternalIcon.propTypes = {
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'base',
    'md',
    'lg',
    'xl',
    'xxl',
    'title',
    'display',
  ]),
};

ExternalIcon.defaultProps = {
  size: 'sm',
};

export const Link = ({
  children, href, newTab, isExternal, className,
}) => (
  <a
    href={href}
    target={newTab || isExternal ? '_blank' : ''}
    className={className}
  >
    {children}
    {isExternal && <ExternalIcon size="xs" />}
  </a>
);

Link.propTypes = {

  /** The content of the Link */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  /** A custom className you would like to pass to the Component */
  className: PropTypes.string,

  /** The URL the Link points to. */
  href: PropTypes.string.isRequired,

  /** Whether or not the Link points to an external site */
  isExternal: PropTypes.bool,

  /** Whether or not to launch the Link in a new tab/window */
  newTab: PropTypes.bool,
};

Link.defaultProps = {
  className: null,
  isExternal: false,
  newTab: false,
};

export default Link;
