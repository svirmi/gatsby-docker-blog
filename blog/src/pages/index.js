import React from "react";
import {Link, graphql} from "gatsby";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Post from "../components/Post";

export default ({data}) => {
    console.log(data);
    return (
        <PrimaryLayout column="col-md-12">
            <h1>My Gatsby project</h1>

            <div className='container'>
                <div className="row justify-content-md-center">
                    <div className='col-md-6'>
                        <Post
                            title="This is the first post"
                            excerpt="Some other text here.."
                        />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="row justify-content-md-center">
                    <div className='col-md-6'>
                        <Post
                            title="This is the first post"
                            excerpt="Some other text here.."
                        />
                    </div>
                </div>
            </div>

            <div className='container mt-4'>
                <div className="row justify-content-md-center">
                    <div className='col-md-6'>
                        <Link to="/test/">Navigate to test page</Link>
                        <img className="img-fluid" src="https://media.giphy.com/media/woZVO2B8ZQ55DqKsmN/giphy.gif" alt="happy guy" />
                    </div>
                </div>
            </div>
        </PrimaryLayout>
    )
};

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
