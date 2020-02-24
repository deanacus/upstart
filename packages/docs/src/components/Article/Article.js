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
  packageName,
  importName,
}) => (
  <StyledArticle>
    <Hero
      title={title}
      description={description}
      packageName={packageName}
      importName={importName}
    >
      <h1>{title}</h1>
      {/* <code>{importString}</code> */}
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
  packageName: PropTypes.string,
  importName: PropTypes.string,
};

Article.defaultProps = {
  description: null,
  packageName: null,
  importName: null,
};

export default Article;
