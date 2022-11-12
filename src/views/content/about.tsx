import React, { useEffect } from "react";

function About()
{
    useEffect(() =>{
        document.title = "Home";
},[]);

    return(
        <div className="container">
            <h1>About us!</h1>
            <hr/>
        </div>
    );
}

export default About;