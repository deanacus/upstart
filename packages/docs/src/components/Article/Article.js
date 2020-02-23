import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const ArticleBody = styled.div`
  margin: ${({ theme }) => theme.space[5] / 10}rem 0;
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Hero = styled.div`
  background: ${({ theme }) => theme.colors.grey[7]};
  color: ${({ theme }) => theme.colors.grey[1]};
`;

export const Article = ({
  title,
  body,
  description,
  packageName,
  importName,
}) => (
  <article>
    <Hero>
      <Title>{title}</Title>
      {importName && <code>import {`{ ${importName} }`} from &apos;@{packageName}&apos;</code>}
      <p>{description}</p>
    </Hero>
    <ArticleBody>
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </ArticleBody>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  description: PropTypes.string,
  packageName: PropTypes.string,
  importName: PropTypes.string,
};

Article.defaultProps = {
  description: null,
  packageName: null,
  importName: null,
};

export default Article;
