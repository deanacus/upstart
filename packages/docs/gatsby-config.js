module.exports = {
  siteMetadata: {
    title: `Upstart Documentation`,
    description: `asdfadsf`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx"],
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js")
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs/`,
      },
    },
  ]
}