import React from "react";
import headerStyles from  "./header.module.css";

export default (props) => (
    <div>
        <h1 className={headerStyles.headerExample}>{props.title}</h1>
    </div>
)