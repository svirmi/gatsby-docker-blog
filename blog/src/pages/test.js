import React from "react";
// import {navigate} from "gatsby";

const Test = () => (
    <div>
        <h1>This is a test page</h1>
        <p>Some paragraph text goes here</p>
        <button onClick={() => console.log("navigate")}>Go to index page</button>
    </div>
)

export default Test;