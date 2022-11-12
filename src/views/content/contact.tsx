import React, { useEffect, useState, ChangeEvent } from "react";

function Contact() {

    const [fullName, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');


    useEffect(() => {
        document.title = "Home";
    }, []);

    function onChangeFullName(e: ChangeEvent<HTMLInputElement>)
    {
        setFullName(e.target.value);
        console.log (fullName);
    }

    function onChangeContactNumber(e: ChangeEvent<HTMLInputElement>)
    {
        setContactNumber(e.target.value);
        console.log (contactNumber);
    }

    function onChangeEmailAddress(e: ChangeEvent<HTMLInputElement>)
    {
        setEmailAddress(e.target.value);
        console.log (emailAddress);
    }

    function onChangeMessage(e: ChangeEvent<HTMLTextAreaElement>)
    {
        setMessage(e.target.value);
        console.log (message);
    }

    function onSubmitForm(e: any)
    {
        e.preventDefault();
        console.log(fullName);
        console.log(contactNumber);
        console.log(emailAddress);
        console.log(message);

    }


    return (
        <div className="container">
            <h1>Contact us!</h1>
            <hr />

            <div className="row justify-content-lg-center g-3">
                <form className="col-lg-8 col-md-6 col-sn-10">

                <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" className="form-control" id="fullName" name="fullName" onChange={onChangeFullName} value={fullName} aria-describedby="fullName Input" placeholder="Enter Full Name" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input type="tel" className="form-control" id="contactNumber" name="contactNumber" onChange={onChangeContactNumber} aria-describedby="contactNumber Input" placeholder="Enter contactNumber" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="emailAddress">Email address</label>
                        <input type="email" className="form-control" id="emailAddress" name="emailAddress" onChange={onChangeEmailAddress} aria-describedby="Email Address Input" placeholder="Enter Email" required/>
                    </div>

                    <div className="form-group mb-3">
                    <label htmlFor="message">Your Message</label>
                    <textarea className="form-control" id="message" name="message" onChange={onChangeMessage} aria-label="Message area"></textarea>
                    
                    </div>

                    <button type="submit" id="submitButton" className="btn btn-primary me-2"><i className="fas fa-envelope fa-lg"></i>Submit</button>
                    <button type="submit" id="submitButton" className="btn btn-warning"><i className="fas fa-undo fa-lg"></i>Cancel</button>

                </form>
            </div>

        </div>
    );
}

export default Contact;