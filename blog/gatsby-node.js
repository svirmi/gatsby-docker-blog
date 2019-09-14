const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" });
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
  query{
  allMarkdownRemark{
    nodes{
      fields {
        slug
      }
      frontmatter {
        title
        image
        date
        keywords
      }
      excerpt
      html
    }
  }
}`).then(result => {
      result.data.allMarkdownRemark.nodes.forEach((node) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/layouts/BlogPostLayout.js')
        })
      })
  })
};