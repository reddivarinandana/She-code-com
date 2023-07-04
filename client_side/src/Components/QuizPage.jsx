import React from "react";
import './QuizPage.css';

function Quiz(){
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

            <div className="totaldiv">
                <div className="banner">
                    <h1>Python Quiz</h1>
                    <img className="quizclass" src="/resources/pythonQuiz.png" alt="" />
                    <h2 className="Python-quiz">Python Quiz</h2>
                    <p className="para">You can evaluate your proficiency in Python by putting your skills to the test SHecodes quiz</p>
                    <h2 className="Test">Test Details</h2>
                    <p className="para">The assessment comprises a total of 30 questions, and participants are not constrained by any time limit.</p>
                    <p className="para">The test is informal and serves as a friendly means to gauge your knowledge or unfamiliarity with Python.</p>
                    <p className="para">For every correct answer, you will receive 1 point. Once you complete the Quiz, your total score out of 30 will be shown.</p>
                    <button className="linking"><a className="anchortag" href="https://docs.google.com/forms/d/e/1FAIpQLSddq928Yr_reTnBWwtR5jkAcg8g-nMhP3B5u1uiTDd6a9DpKQ/viewform?usp=sf_link">Start the quiz</a></button>
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

export default Quiz;