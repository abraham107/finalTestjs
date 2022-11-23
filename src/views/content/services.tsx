import React, { useEffect } from "react";
import ser1 from "../../Data/images/css.jpg";
import ser2 from "../../Data/images/dotnet.png";
import ser3 from "../../Data/images/javascript.png";
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
                <div>
                    <h1></h1>
                    <p>
                    <img src={ser1} alt="css" />
                    <br/><br/>
                    <img src={ser2} alt="dotnet" />
                    <br/><br/>
                    <img src={ser3} alt="java" />
                    <br/><br/>
                    </p>
                </div>
                {/* {
                services.map((service) => (<li className="list-group-item" key={"i"}>{service}</li>))
                } */}
            </ul>
        </div>
        </div>
    );
}

export default Services;