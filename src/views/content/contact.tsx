import React, { useEffect } from "react";

function Contact()
{
    useEffect(() =>{
        document.title = "Home";
},[]);

    return(
        <div className="container">
            <h1>Contact us!</h1>
            <hr/>
        </div>
    );
}

export default Contact;