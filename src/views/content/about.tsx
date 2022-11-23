import React, { useEffect } from "react";
import logo from '../../Data/images/ab.jpg';


function About() {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div className="container">
            <h1>About us!</h1>
            <hr />
            <p>
           You can contact us!<br/><br/>
           <img src={logo} height='500px' width='400px'></img>
            </p>
        </div>
    );
}

export default About;