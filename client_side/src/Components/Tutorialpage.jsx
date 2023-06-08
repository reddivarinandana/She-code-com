import React from "react";
import './Tutorialpage.css';

function Tutorial() {


    const ConceptsData = [{
        id: "1",
        conceptName: "Introduction To Python",
        conceptAvatar: "",
        content: "",
        video: ""
    },
    {
        id: "2",
        conceptName: "Basic Syntax of Python",
        conceptavatar: "https://www.tutorialinhindi.com/wp-content/uploads/2021/12/syntax-of-python-in-hindi-1024x576.png",
        video: ""
    },
    {
        id: "3",
        conceptName: "Comments In Python",
        conceptavatar: "https://www.javainterviewpoint.com/wp-content/uploads/2020/06/Python-Comments-1.png",
        content: "",
        video: ""
    },
    {
        id: "4",
        conceptName: "Variables In Python",
        conceptavatar: "https://devqa.io/assets/images/python-variables.png",
        content: "",
        video: ""
    },
    {
        id: "5",
        conceptName: "Datatypes In Python",
        conceptavatar: "https://cdn.activestate.com/wp-content/uploads/2019/10/Python-data-types_hero.png",
        content: "",
        video: ""
    },
    {
        id: "6",
        conceptName: "Operators In Python",
        conceptavatar: "https://www.aipython.in/wp-content/uploads/2020/04/Python-operators-1024x576.jpg",
        content: "",
        video: ""
    },
    {
        id: "7",
        conceptName: "Conditional Statements in Python",
        conceptavatar: "https://www.shiksha.com/online-courses/articles/wp-content/uploads/sites/11/2022/02/Conditional-Statements-in-Python.png",
        content: "",
        video: ""
    },
    {
        id: "8",
        conceptName: "Loops In Python",
        conceptavatar: "https://d2o2utebsixu4k.cloudfront.net/media/images/d75c6b07-df94-46c6-b5bb-6632fa44dd38.png",
        content: "",
        video: ""
    },
    {
        id: "9",
        conceptName: "Arrays In Python",
        conceptavatar: "https://static.javatpoint.com/python/images/python-2d-array.png",
        content: "",
        video: ""
    },
    {
        id: "10",
        conceptName: "Strings In Python",
        conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiH0UGfLBLZ93sRF_-Z9acZwpaTxfIbJLMuA&usqp=CAU",
        content: "",
        video: ""
    },
    {
        id: "11",
        conceptName: "Lists In Python",
        conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6FqLzmXWflmvsTxp46WIP_j1PDZnzRDXuA&usqp=CAU",
        content: "",
        video: ""
    },
    {
        id: "12",
        conceptName: "Sets In Python",
        conceptavatar: "https://www.trytoprogram.com/images/python_sets.jpg",
        content: "",
        video: ""
    },
    {
        id: "13",
        conceptName: "Tuples In Python",
        conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fU8L_3fxSb0W1mZpla39xAkUWMVBdhE_tw&usqp=CAU",
        content: "",
        video: ""
    },
    {
        id: "14",
        conceptName: "Dictionary In Python",
        conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS827lLmWkZDWdc6Z8zEEsv5Ec_BedMwlyJEg&usqp=CAU",
        content: "",
        video: ""
    },
    {
        id: "15",
        conceptName: "Functions In Python",
        conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXC83cieiHJNi89MJlv3jCMfOF-UUDCO1TDQ9ibpchnl8aUBb2vbFXAcvR1O-Q1Pr6RXg&usqp=CAU",
        content: "",
        video: ""
    },
    {
        id: "16",
        conceptName: "Files In Python",
        conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLRKGjS60VzI-z3tFWED7T1yfO1MmjUoUILvUF67CJoU19lPkTWBeX6_b1Eazz7zE6kI&usqp=CAU",
        content: "",
        video: ""
    }];
    localStorage.setItem("pythonTutorial", JSON.stringify(ConceptsData));
    let viewconcepts = JSON.parse(localStorage.getItem("pythonTutorial"))

    return (
        <div>
            <div className="navbar">
                <h1 className="logo"><span style={{ color: "red" }}>S</span><span style={{ color: "green" }}>H</span>ecode</h1>
                <div className="box">
                </div>
                <div className="searchbox">
                    <img className="icon" src="https://cdn.icon-icons.com/icons2/3392/PNG/512/small_search_icon_213735.png" alt="" />
                </div>
                <h3 className="tutorial">Tutorial</h3>
                <h3 className="video">Videos</h3>
                <h3 className="quiz">Quiz</h3>
                <h3 className="test">Test</h3>
                <h3 className="signup">Signup</h3>
            </div>
            <div className="displayConcepts"><h1>All Concepts</h1>
                {
                viewconcepts.map(({ conceptavatar }) => <img className="conceptImage" src={conceptavatar} alt={"names"} />
                )
            }</div>
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
                    <h2>SHecode is enhance for Learning</h2>
                </div>
            </div>
        </div>
    )
}

export default Tutorial;