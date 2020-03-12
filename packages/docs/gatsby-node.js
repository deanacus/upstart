const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  const createSlug = (item) => {
    const pathPrefix = getNode(item.parent).relativeDirectory;
    const slug = item.frontmatter.title;

    if (!pathPrefix) {
      return '/';
    }

    return `${pathPrefix}/${slug}`.replace(' ', '-').toLowerCase();
  };

  if (node.internal.type === 'Mdx') {
    createNodeField({
      name: 'slug',
      node,
      value: createSlug(node),
    });

    createNodeField({
      name: 'menu',
      node,
      value: getNode(node.parent).relativeDirectory.replace('-', ' '),
    });
  }
};

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
