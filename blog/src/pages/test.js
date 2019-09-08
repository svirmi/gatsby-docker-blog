import React from "react";
import {navigate} from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Test = () => (
    <div>
        <Header title="Header title for test page" />

        <div className='container'>

        <h1>This is a test page</h1>
        <p>Some paragraph text goes here</p>
        <button onClick={() => navigate("/")}>Go to index page</button>

        </div>
        <Footer />

    </div>
)

export default Test;