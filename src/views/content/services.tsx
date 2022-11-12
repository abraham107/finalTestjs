import React from "react";

function Services() {
    let services = ["Web Design", "Custom programming"]
    return (
        <div className="container">
            <h1>About us!</h1>
            <hr />
        <div className="col">
            <div className="row"></div>
            <ul className="list-group">
                {
                services.map((service) => (<li>{service}</li>))
                }
            </ul>
        </div>
        </div>
    );
}

export default Services;