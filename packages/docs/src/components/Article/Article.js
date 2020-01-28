import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Column } from '@deanacus/upstart';

const ArticleBody = styled.div`
  margin: ${({ theme }) => theme.space[5] / 10}rem 0;
`;

const Title = styled.h1`
  margin-top: 0;
`;

export const Article = ({
  title,
  body,
  description,
}) => (
  <Column cols={6}>
    <article>
      <Title>{title}</Title>
      <p>{description}</p>
      <ArticleBody>
        <MDXRenderer>
          {body}
        </MDXRenderer>
      </ArticleBody>
    </article>
  </Column>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Article.defaultProps = {
  description: null,
};

export default Article;
