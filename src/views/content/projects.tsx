import React, { useEffect } from "react";

function Projects()
{
    useEffect(() =>{
        document.title = "Home";
},[]);

    return(
        <div className="container">
            <h1>Our Projects!</h1>
            <hr/>
        </div>
    );
}

export default Projects;