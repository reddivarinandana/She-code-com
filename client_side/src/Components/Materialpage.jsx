import React from "react";
import { useState } from "react";
import './Materialpage.css';

function TUTORIAL(){
    return(
        <div>
            <div className="navbar">
                <h1 className="logo"><span className="Logo" style={{ color: "#FFA500" }}>S</span><span style={{ color: "blue" }}>H</span>ecodes</h1>
                <h3 className="tutorial">Tutorial</h3>
                <h3 className="video">Videos</h3>   
                <h3 className="quiz">Quiz</h3>
                <h3 className="test">Test</h3>
                <h3 className="signup">Signup</h3>
            </div>

            <div className="DisplayTutoarial">
                <div className="firstDiv">
                    <h1 className="Hoverpart">Python</h1>
                </div>
                <div className="SecondDiv">
                    <h1>Python</h1>
                    <div className="ThirdDiv">
                        <h3>Introduction to Python</h3>
                        <hr></hr>
                        <h3>Basic Syntax In Python</h3>
                        <hr></hr>
                        <h3>Comments In Python</h3>
                        <hr></hr>
                        <h3>Variables in Python</h3>
                        <hr></hr>
                        <h3>Datatypes In Python</h3>
                        <hr></hr>
                        <h3>OPerators in python</h3>
                        <hr></hr>
                        <h3>Conditional Statements in Python</h3>
                        <hr></hr>
                        <h3>Loops In Python</h3>
                        <hr></hr>
                        <h3>Arrays In Python</h3>
                        <hr></hr>
                        <h3>Strings In Python</h3>
                        <hr></hr>
                        <h3>Lists In Python</h3>
                        <hr></hr>
                        <h3>Sets In Python</h3>
                        <hr></hr>
                        <h3>Tuples In Python</h3>
                        <hr></hr>
                        <h3>Dictionary In Python</h3>
                        <hr></hr>
                        <h3>Functions In Python</h3>
                        <hr></hr>
                        <h3>Files In Python</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TUTORIAL