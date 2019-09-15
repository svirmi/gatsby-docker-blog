import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const BlogPostLayout = ({data}) => {
    const post = data.markdownRemark;
    return (
            <div>
                <SEO
                    title={post.frontmatter.title}
                    kw={post.frontmatter.keywords}
                    description={post.excerpt}
                />
                <Header />
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1>{post.frontmatter.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: post.html}}></div>
                        <img src={post.frontmatter.image} alt={post.frontmatter.title}/>
                    </div>
                </div>
                <Footer/>
            </div>
    )
};

export default BlogPostLayout;

export const query = graphql `
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}){
            html
            excerpt
            frontmatter {
                title
                image
                keywords
            }
        }
    }
`;