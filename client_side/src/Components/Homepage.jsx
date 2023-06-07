import React from "react";
import { useState } from "react";
import './Homepage.css';

function HomePage(){
    return(
        <div>
            <div className="navbar">
                <h1 className="logo"><span style={{color:"red"}}>S</span><span style={{color:"green"}}>H</span>ecode</h1>
                <div className="box">
                    <div className="search-box"><h5 className="left">Search</h5></div>
                </div>
                <h3 className="tutorial">Tutorial</h3>
                <h3 className="video">Videos</h3>
                <h3 className="quiz">Quiz</h3>
                <h3 className="test">Test</h3>
                <h3 className="signup">Signup</h3>
            </div>
            <div className="educationImage">
                {/* <span style={{backgroundImage:"background.jpg"}}></span> */}
                <img class="sliderpic" src="background.jpg" alt="" />
            </div>
        </div>
    )
}

export default HomePage;