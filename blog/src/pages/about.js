import React from "react";
import {Link} from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default () => (
    <div>
        <Header title="Header of index page" />
        <div className='container mt-4'>
            <h1>About page</h1>
            <div className="row justify-content-md-center">
                <div className='col-md-6'>
                    <Link to="/test/">Navigate to test page</Link>
                    <img className="img-fluid" src="https://media.giphy.com/media/woZVO2B8ZQ55DqKsmN/giphy.gif" alt="happy guy" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
)
