const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              route
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;
  posts.forEach(({ node }) => {
    createPage({
      path: `${node.frontmatter.route}`,
      component: path.resolve('./src/components/Layout.js'),
      context: { id: node.id },
    });
  });
};
