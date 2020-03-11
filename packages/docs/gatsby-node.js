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
            fields {
              slug
              menu
            }
            frontmatter {
              title
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
      path: `${node.fields.slug}`,
      component: path.resolve('./src/components/Layout.js'),
      context: { id: node.id },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  const createSlug = (item) => {
    const parent = getNode(item.parent).relativeDirectory;
    const file = item.frontmatter.title;
    if (!parent) {
      return `${file}`.replace(' ', '-').toLowerCase();
    }

    return `${parent}/${file}`.replace(' ', '-').toLowerCase();
  };

  if (node.internal.type === 'Mdx') {
    createNodeField({
      name: 'slug',
      node,
      value: createSlug(node),
    });
    // Add it to a collection
    createNodeField({
      name: 'menu',
      node,
      value: getNode(node.parent).relativeDirectory.replace('-', ' '),
    });
  }
};
