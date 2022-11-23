import React, { useEffect } from "react";
import pro1 from "../../Data/images/css.jpg";
import pro2 from "../../Data/images/dotnet.png";
import pro3 from "../../Data/images/javascript.png";

function Projects()
{
    useEffect(() =>{
        document.title = "Home";
},[]);

    return(
       <div className="container">
            <h1>Our Projects!</h1>
            <hr/>
            <p>
                    <img src={pro1} alt="css" />
                    <br/><br/>
                    <img src={pro2} alt="dotnet" />
                    <br/><br/>
                    <img src={pro3} alt="java" />
                    <br/><br/>
                    </p>

        </div>
    
    );
}

export default Projects;