import React, { useEffect } from "react";

function Services() {

    useEffect(() =>{
        document.title = "Home";
},[]);

    let services = ["Web Design", "Custom programming", "Mobile Application"]

    return (
        <div className="container">
            <h1>About us!</h1>
            <hr />
        <div className="col">
            <div className="row"></div>
            <ul className="list-group">
                {
                services.map((service) => (<li className="list-group-item" key={"i"}>{service}</li>))
                }
            </ul>
        </div>
        </div>
    );
}

export default Services;