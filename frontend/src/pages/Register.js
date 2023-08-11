import React, { useState } from "react";
import "../App.css"


function Register(props){
  
    const handleRegisterSubmit =  (event) => {
        event.preventDefault();
        var token = localStorage.getItem("accessToken");
        console.log(token);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        //myHeaders.append("Authorization", "Bearer "+token);

        var raw = JSON.stringify({
            "name": event.target[0].value,
            "email": event.target[1].value,
            "password": event.target[2].value
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        fetch("http://localhost:8080/user", requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else if (response.status === 401 || response.status === 403) {
                    throw new Error('Invalid email or password');
                } else {
                    throw new Error('Unexpected error occurred');
                }
            })
            .then(result => {
                console.log(result);
                window.location.href = "../";
            })
            .catch(error => console.log('error', error));
    }

    return(
    <div className="appContainer">
        <div className="RegisterContainer">
            <span className="log">Εγγραφή</span>
            <form className="formreg" onSubmit={handleRegisterSubmit}>
                <div className="logInForm">
                    <input 
                    className="nameRegister" 
                    type="text" 
                    placeholder="Όνομα"
                    required/> 
                    <input 
                    className="emailRegister" 
                    type="email" 
                    placeholder="e-mail" 
                    required/> 
                    <input 
                    className="passwordRegister" 
                    type="password" 
                    placeholder="Κωδικός" 
                    required/>  
                </div>
                <button type="submit" className="RegisterBtn">Εγγραφή</button>
            </form>
        </div>
        <div className="loginAcc">
            <span className="notSignedIn">Έχετε ήδη λογαριασμό;</span> 
            <button>
                <a href="/login">Συνδεθείτε!</a>
            </button>
        </div>
    </div>
    );

}
  

export default Register;     