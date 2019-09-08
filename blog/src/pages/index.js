import React from "react";
import {Link} from "gatsby";
import Header from "../components/Header";

export default () => (
    <div>
        <Header title="Header of index page" />
        <div>
            <h1>My Gatsby project</h1>
            <Link to="/test/">Navigate to test page</Link>
        </div>
        <img src="https://media.giphy.com/media/woZVO2B8ZQ55DqKsmN/giphy.gif" alt="happy guy" />
    </div>
)
