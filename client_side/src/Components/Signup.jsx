import React, { useState } from "react";
import './signup.css';
import Login from "./Login";
function Signup({islogin,setIsLogin}) {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [loginClicked, setLoginClicked] = useState(false);
    function signupdata() {
        // var name=document.querySelector(".name").value;
        // var user=document.querySelector(".user").value;
        // var mail=document.querySelector(".mail").value;
        // var password=document.querySelector(".password").value;
        // var phone=document.querySelector(".phone");
        console.log(name, userName, mail, password, phone);
        var result = JSON.parse(localStorage.getItem("signupdata")) || [];

        if (name !== "" && userName !== "" && mail !== "" && password !== "" && phone !== "") {
            for (let i = 0; i < result.length; i++) {
                if (result[i].userName === userName) {
                    alert("User already exist");
                    return;
                }
            }
            localStorage.setItem("signupdata", JSON.stringify([...result, { name, userName, mail, password, phone }]));
            console.log(localStorage);
            alert("Account Created Successfully");
            setIsLogin(true);
        } else {
            // var result=JSON.parse(localStorage.getItem("signupdata")) || [];
            // localStorage.setItem("signupdata",JSON.stringify([...result,{name,userName,mail,password,phone}]));
            // console.log(localStorage);
            alert("please enter required Details");
        }
        // localStorage.setItem("signupdata",JSON.stringify([...result,{name,user,mail,password,phone}]));
        // console.log(localStorage.getItem("signupdata"));
    }
    const handleRedirect = () => {
        setIsLogin(true);
        console.log(islogin);
    }
    return (
        <div id="layout">
            <h1>Signup Form</h1>
            <div className="Display">
                <div className="Image">
                    <img className="first" src="resources/background.jpg" alt="" />
                </div>
                <div className="form"><br/>
                    <label id="name">Name</label><br/>
                    <input type="text" className="name" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value
                    )} /><br/><br/>
                    <label id="name">UserName</label><br/>
                    <input type="text" className="user" placeholder="Enter username" onChange={(e) => setUserName(e.target.value
                    )} /><br/><br/>
                    <label id="name">Email</label><br/>
                    <input type="text" className="mail" placeholder="Enter Your Email" onChange={(e) => setMail(e.target.value
                    )} /><br/><br/>
                    <label id="name">Password</label>
                    <input type="text" className="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value
                    )} /><br/><br/>
                    <label id="name">PhoneNumber</label>
                    <input type="number" className="phone" placeholder="Enter your PhoneNumber" onChange={(e) => setPhone(e.target.value
                    )} />
                    <button className="button" onClick={signupdata}>Submit</button>
                    <p className="account">Already have an account please <span onClick={handleRedirect}>Login</span></p>
                </div>
            </div>
        </div>
    )
}

export default Signup