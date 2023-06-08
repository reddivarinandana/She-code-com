import React, { useState } from "react";
import './login.css';

function Login({islogin,setIsLogin,setIsForgot}) {
    const [user, setUserName] = useState("");
    const [password, setPassword] = useState("");
    function logindata() {
        console.log(user, password);
        if(user.length !== 0 && password.length !== 0){
            var results = JSON.parse(localStorage.getItem("signupdata")) || [];
            let flag = "Please signup first before login into this website";
            const loginDetails = JSON.parse(localStorage.getItem("login")) || [];
            for(let i = 0; i < results.length; i++){
                const {userName, password} = results[i];
                if(userName == user && password == password){
                    flag = "login successfully";
                    localStorage.setItem("login",JSON.stringify([...loginDetails,{userName: user, password : password}]));
                    break;
                }
            }
            alert(flag);
        }else{
            alert("Please Enter the mandatory field in the form");
        }
    }
    const handleRedirect = () =>{
        setIsLogin(false);
    }

    const handleForgot = () => {
        setIsForgot(true);
    }
    return (
        <div id="login-outerlayout">
            <h1>Login Form</h1>
            <div className="Displayform">
                <div className="form-form"><br/><br/>
                    <label className="color">UserName</label>
                    <input type="text" className="user" placeholder="Enter username" onChange={(e) => setUserName(e.target.value
                    )} /><br/><br/>
                    <label className="color">Password</label>
                    <input type="text" className="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value
                    )} />
                    <button className="btn" onClick={logindata}>Submit</button>
                    <div onClick={handleForgot}>Forgot Password</div>
                    <p>If you don't have any account please <span onClick={handleRedirect}>signup</span></p>
                    <p>Or Login With</p>
                    <p className="Connect-with">
                        <img className="insta" src="/resources/instaimage.jpeg" alt="" />
                        <img className="google" src="/resources/googleimage.png" alt="" />
                        <img className="facebook" src="/resources/facebookimage.jpg" alt="" />
                    </p>
                </div>
                <div className="second">
                    <img className="secondimg" src="/resources/background.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login