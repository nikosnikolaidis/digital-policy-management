import React, { useState } from "react";
import "../App.css"


function Login(props){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [userType, setUserType] = useState('');
  
  
    const handleLogInSubmit =  (event) => {
        event.preventDefault();
        var urlencoded = new URLSearchParams();
        urlencoded.append("email", "admin@uom.gr");
        urlencoded.append("password", "admin");
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: urlencoded
        })
            .then((response) => {
                if (response.ok) {
                    setLoggedIn(true);
                    return response.json();
                }
                else if (response.status === 401 || response.status === 403) {
                    throw new Error('Invalid email or password');
                } else {
                    throw new Error('Unexpected error occurred');
                }
            })
            .then((body) => {
                console.log("Response body:", body);

                localStorage.setItem("accessToken", body.accessToken);
                localStorage.setItem("refreshToken", body.refreshToken);

                window.location.href = "../";
            })
            .catch((error) => {
                console.error(error);
                alert("Invalid email or password");
            });
    }

    return(
    <div className="appContainer">
        <div className="logInContainer">
            <span className="log">Είσοδος</span>
            <form className="formlog" onSubmit={handleLogInSubmit}>
                <div className="logInForm">
                    <input 
                    className="emailLogIn" 
                    type="email" 
                    placeholder="e-mail" 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email} 
                    required/> 
                    <input 
                    className="passwordLogIn" 
                    type="password" 
                    placeholder="Κωδικός" 
                    onChange={(e)=>setPassword(e.target.value)} 
                    value={password}
                    required/>  
                </div>
                <button type="submit" className="logInBtn">Σύνδεση</button>
            </form>
        </div>
        <div className="createAcc">
            <span className="notSignedIn">Δεν έχετε κάνει εγγραφή;</span> 
            <button>
                <a href="/register">Δημιουργία Λογαριασμού</a>
            </button>
        </div>
    </div>
    );

}
  

export default Login;     