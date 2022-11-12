import React from "react";

import User from '../../views/Models/User';

function Home(props:User)
{
    return(
        <div className="container">
            <h1 id="WelcomeHeader">Welcome to our site, {props.displayName}</h1>
            <hr/>
        </div>
    );
}

export default Home;