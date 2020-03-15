import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { getPadding, getMargin } from '@deanacus/upstart';
import { Hero } from './Hero';

const StyledArticle = styled.article`
  margin-left: 250px;
  display: flex;
  flex-direction: column;
`;

const ArticleBody = styled.div`
  ${({ theme }) => getMargin('my-5', theme)};
  width: 50%;
  ${({ theme }) => getPadding('pl-5', theme)}
`;

export const Article = ({
  title,
  body,
  description,
}) => (
  <StyledArticle>
    <Hero>
      <h1>{title}</h1>
      <p>{description}</p>
    </Hero>
    <ArticleBody>
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </ArticleBody>
  </StyledArticle>
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
