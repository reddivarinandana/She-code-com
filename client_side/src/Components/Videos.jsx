import React from "react";
import { useState } from "react";
import './Videos.css';

function Video(){
    return(
        <div>
            <div className="navbar">
                <h1 className="logo"><span className="Logo" style={{ color: "red" }}>S</span><span style={{ color: "green" }}>H</span>ecodes</h1>
                <div className="box">
                </div>
                <div className="searchbox">
                    <img className="icon" src="/resources/searchIcon.png" alt="" />
                </div>
                <h3 className="tutorial">Tutorial</h3>
                <h3 className="video">Videos</h3>
                <h3 className="quiz">Quiz</h3>
                <h3 className="test">Test</h3>
                <h3 className="signup">Signup</h3>
            </div>
            <div className="DisplayVideos">
            </div>
            <div className="footer">
                <div className="display">
                    <div className="firstpart">
                        <h2 className="Quiz">Quizes</h2>
                        <h2>Exercises</h2>
                    </div>
                    <div className="secondpart">
                        <h2>Stay Connected with us</h2>
                        <img className="facebookimage" src="/resources/facebookimage.jpg" alt="" />
                        <img className="googleimage" src="/resources/googleimage.png" alt="" />
                        <img className="instaimage" src="/resources/instaimage.jpeg" alt="" />
                    </div>
                    <div className="thirdpart">
                        <h2>Contact with</h2>
                        <h2>8688955968</h2>
                        <h2>9059669225</h2>
                    </div>
                </div>
                <div className="text">
                    <h2>SHecodes is enhance for Learning</h2>
                </div>
            </div>
        </div>
    )
}

export default Video;