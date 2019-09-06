import React from "react";
import {navigate} from "gatsby";
import Header from "../components/header";


const Test = () => (
    <div>
        <Header/>
        <h1>This is a test page</h1>
        <p>Some paragraph text goes here</p>
        <button onClick={() => navigate("/")}>Go to index page</button>
    </div>
)

export default Test;