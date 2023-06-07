import React from "react";
import { useState } from "react";
import './Homepage.css';

function HomePage(){
    return(
        <div>
            <div className="navbar">
                <h1 className="logo"><span style={{color:"red"}}>S</span><span style={{color:"green"}}>H</span>ecode</h1>
                <div className="box">
                </div>
                <div className="searchbox">
                    <img class="icon" src="https://cdn.icon-icons.com/icons2/3392/PNG/512/small_search_icon_213735.png" alt="" />
                </div>
                <h3 className="tutorial">Tutorial</h3>
                <h3 className="video">Videos</h3>
                <h3 className="quiz">Quiz</h3>
                <h3 className="test">Test</h3>
                <h3 className="signup">Signup</h3>
            </div>
            <div className="educationImage">
                <h1 className="quote">Education is the most powerful<br/> weapon which you can use<br/> to change the world.</h1>
            </div>
            <div className="concepts">
                <h1>Python Concepts</h1>
                <div className="concept">
                    <div ><img className="introimage" src="introimage.png" alt="" /></div>
                    <div className="box1"><img className="introimage" src="syntax.png" alt="" /></div>
                    <div className="box1"><img className="introimage" src="commentsimage.jpg" alt="" /></div>
                    <div className="box1"><img className="introimage" src="variables.png" alt="" /></div>
                    <div className="box1"><img className="introimage" src="datatypes.jpg" alt="" /></div>
                </div>
                <div className="concept">
                    <div><img className="introimage" src="operatorsimage.jpg" alt="" /></div>
                    <div className="box1"><img className="introimage" src="conditionalstatement.png" alt="" /></div>
                    <div className="box1"><img className="introimage" src="loops.png" alt="" /></div>
                    <div className="box1"><img className="introimage" src="functions.png" alt="" /></div>
                    <div className="box1"><img className="introimage" src="lists.png" alt="" /></div>
                </div>
                <div className="concept">
                    <div><img className="introimage" src="string.jpg" alt="" /></div>
                    <div className="box1"><img className="introimage" src="dictionary.png" alt="" /></div>
                    <div className="box1"><img className="introimage" src="tuples.jpeg" alt="" /></div>
                    <div className="box1"><img className="introimage" src="sets.jpeg" alt="" /></div>
                    <div className="box1"><img className="introimage" src="filehandling.jpeg" alt="" /></div>
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
                        <img className="facebookimage" src="facebookimage.jpg" alt="" />
                        <img className="googleimage" src="googleimage.png" alt="" />
                        <img className="instaimage" src="instaimage.jpeg" alt="" />
                    </div>
                    <div className="thirdpart">
                        <h2>Contact with</h2>
                        <h2>8688955968</h2>
                        <h2>9059669225</h2>
                    </div>
                </div>
                <div className="text">
                    <h2>SHecode is enhance for Learning</h2>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;