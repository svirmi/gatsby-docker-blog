import React from "react";
import {Link} from "gatsby";
import PrimaryLayout from "../layouts/PrimaryLayout";
import SEO from "../components/SEO";

export default () => (
    <PrimaryLayout column="col-md-12">

        <SEO />

        <h1>About page</h1>
            <div className='col-md-6'>
                <Link to="/test/">Navigate to test page</Link>
                <img className="img-fluid" src="https://media.giphy.com/media/woZVO2B8ZQ55DqKsmN/giphy.gif" alt="happy guy" />
            </div>
    </PrimaryLayout>
);

