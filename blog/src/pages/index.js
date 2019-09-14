import React from "react";
import {Link, graphql} from "gatsby";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Post from "../components/Post";

export default ({data}) => {
    return (
        <PrimaryLayout column="col-md-12">

            <h1>My Gatsby project</h1>

            <div className='container mt-4'>
                <div className="row justify-content-md-center">
                    <div className='col-md-6'>
                        <Link to="/test/">Navigate to test page</Link>
                        <img className="img-fluid" src="https://media.giphy.com/media/woZVO2B8ZQ55DqKsmN/giphy.gif" alt="happy guy" />
                    </div>
                </div>
            </div>

            {
                data.allMarkdownRemark.nodes.map((node, i) => (
                <Post
                    image   = {node.frontmatter.image}
                    title   = {node.frontmatter.title}
                    excerpt = {node.excerpt}
                    key     = {i}           // key={Math.random()} - very bad!
                    // https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
                />
            ))
            }

        </PrimaryLayout>
    )
}
export const query = graphql`
query{
  allMarkdownRemark{
    nodes{
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
`;
