import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogPostLayout = (props) => (
    <div>
        <Header />
        <div className="container">
            <div className="row justify-content-md-center">
                <div>
                    BlogPost page
                </div>
            </div>
        </div>
        <Footer/>
    </div>
)

export default BlogPostLayout;