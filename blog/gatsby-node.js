const { createFilePath } = require("gatsby-source-filesystem");

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
}
  `).then(result => console.log(JSON.stringify(result)))
};