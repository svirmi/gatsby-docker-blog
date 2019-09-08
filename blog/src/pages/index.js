import React from "react";
import {Link} from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";

export default () => (
    <div>
        <Header title="Header of index page" />

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

        <div className='container mt-4'>
            <div className="row justify-content-md-center">
                <div className='col-md-6'>
                        <Link to="/test/">Navigate to test page</Link>
                    <img src="https://media.giphy.com/media/woZVO2B8ZQ55DqKsmN/giphy.gif" alt="happy guy" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
)
