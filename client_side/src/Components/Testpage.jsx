import React from "react";
import { useState } from "react";
import './Testpage.css';

function TestPage(){
    return(
        <div>
            <div className="navbar">
                <h1 className="logo"><span style={{ color: "red" }}>S</span><span style={{ color: "green" }}>H</span>ecodes</h1>
                {/* <div className="box">
                </div> */}
                {/* <div className="searchbox">
                    <img className="icon" src="/resources/searchIcon.png" alt="" />
                </div> */}
                <h3 className="tutorial">Tutorial</h3>
                <h3 className="video">Videos</h3>
                <h3 className="quiz">Quiz</h3>
                <h3 className="test">Certify</h3>
                <h3 className="signup">Signup</h3>
            </div>
            <div className="get-certify">
                <h3 className="font">Take test and get Certified</h3>
                <div className="box5">
                    <div className="div1">
                        <h3 className="margin">Be unique</h3>
                        <h4 className="normal">Complete certification in technical skills by successfully finishing the  SHecodes Skills Certification Test.</h4>
                    </div>
                    <div className="div1">
                        <h3 className="margin">Standardized appraisal</h3>
                        <h4 className="normal">Assessments are structured around particular skills and are thoughtfully selected based on extensive recruiting data gathered</h4>
                    </div>
                    <div className="div1">
                        <h3 className="margin">Enhance your profile</h3>
                        <h4 className="normal">Once you pass an assessment, you can advertise your abilities using the SHecodes certificate to peers and employers.</h4>
                    </div>
                </div>
                <div>
                    <h2>Validate Your Skills</h2>
                    <div className="basic">
                        <h2 className="center">Python(Basic)</h2>
                        <h3 className="cerification">Get Certified</h3>
                    </div>
                </div>
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

export default TestPage