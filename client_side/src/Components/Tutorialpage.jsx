import React from "react";
import './Tutorialpage.css';

function Tutorial() {


    // const ConceptsData = [{
    //     id: "0",
    //     conceptName: "Introduction To Python",
    //     conceptAvatar: "https://cloudacademy.com/wp-content/uploads/2019/06/Python-Featured-Image.png",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=LajgX-9nNB8&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR"
    // },
    // {
    //     id: "1",
    //     conceptName: "Basic Syntax of Python",
    //     conceptavatar: "https://www.tutorialinhindi.com/wp-content/uploads/2021/12/syntax-of-python-in-hindi-1024x576.png",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=drfr-jrkQjg"
    // },
    // {
    //     id: "2",
    //     conceptName: "Comments In Python",
    //     conceptavatar: "https://www.javainterviewpoint.com/wp-content/uploads/2020/06/Python-Comments-1.png",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=WWYi6_EliQY"
    // },
    // {
    //     id: "3",
    //     conceptName: "Variables In Python",
    //     conceptavatar: "https://devqa.io/assets/images/python-variables.png",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=Aa8gnmhUxG8&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=3"
    // },
    // {
    //     id: "4",
    //     conceptName: "Datatypes In Python",
    //     conceptavatar: "https://cdn.activestate.com/wp-content/uploads/2019/10/Python-data-types_hero.png",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=KBngIxJkizo"
    // },
    // {
    //     id: "5",
    //     conceptName: "Operators In Python",
    //     conceptavatar: "https://www.aipython.in/wp-content/uploads/2020/04/Python-operators-1024x576.jpg",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=3gtA80xXmQY"
    // },
    // {
    //     id: "6",
    //     conceptName: "Conditional Statements",
    //     conceptavatar: "https://www.shiksha.com/online-courses/articles/wp-content/uploads/sites/11/2022/02/Conditional-Statements-in-Python.png",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=JEyXjMg6F1A&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=9"
    // },
    // {
    //     id: "7",
    //     conceptName: "Loops In Python",
    //     conceptavatar: "https://d2o2utebsixu4k.cloudfront.net/media/images/d75c6b07-df94-46c6-b5bb-6632fa44dd38.png",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=AxQCHOXP6XA&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=11"
    // },
    // {
    //     id: "8",
    //     conceptName: "Arrays In Python",
    //     conceptavatar: "https://static.javatpoint.com/python/images/python-2d-array.png",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=hhDMjL0xQlA"
    // },
    // {
    //     id: "9",
    //     conceptName: "Strings In Python",
    //     conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiH0UGfLBLZ93sRF_-Z9acZwpaTxfIbJLMuA&usqp=CAU",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=RuUUwGuMjKY"
    // },
    // {
    //     id: "10",
    //     conceptName: "Lists In Python",
    //     conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6FqLzmXWflmvsTxp46WIP_j1PDZnzRDXuA&usqp=CAU",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=orVZ4MS5YxY&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=4"
    // },
    // {
    //     id: "11",
    //     conceptName: "Sets In Python",
    //     conceptavatar: "https://www.trytoprogram.com/images/python_sets.jpg",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=rogCt-z3fR8&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=6"
    // },
    // {
    //     id: "12",
    //     conceptName: "Tuples In Python",
    //     conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fU8L_3fxSb0W1mZpla39xAkUWMVBdhE_tw&usqp=CAU",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=HebH4ybHAtw&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=5"
    // },
    // {
    //     id: "13",
    //     conceptName: "Dictionary In Python",
    //     conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS827lLmWkZDWdc6Z8zEEsv5Ec_BedMwlyJEg&usqp=CAU",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=KFPKuLEzNBs&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=7"
    // },
    // {
    //     id: "14",
    //     conceptName: "Functions In Python",
    //     conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXC83cieiHJNi89MJlv3jCMfOF-UUDCO1TDQ9ibpchnl8aUBb2vbFXAcvR1O-Q1Pr6RXg&usqp=CAU",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=KK3W0cMXArg&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=13"
    // },
    // {
    //     id: "15",
    //     conceptName: "Files In Python",
    //     conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLRKGjS60VzI-z3tFWED7T1yfO1MmjUoUILvUF67CJoU19lPkTWBeX6_b1Eazz7zE6kI&usqp=CAU",
    //     content: "",
    //     video: "https://www.youtube.com/watch?v=-ogMBxqsJkw"
    // }];
    // localStorage.setItem("pythonTutorial", JSON.stringify(ConceptsData));
    // let viewconcepts = JSON.parse(localStorage.getItem("pythonTutorial"))

    return (
        <div>
            <div className="navbar">
                <h1 className="logo"><span style={{ color: "#FFA500" }}>S</span><span style={{ color: "blue" }}>H</span>ecodes</h1>
                <h3 className="tutorial">Tutorial</h3>
                <h3 className="video">Videos</h3>
                <h3 className="quiz">Quiz</h3>
                <h3 className="test">Test</h3>
                <h3 className="signup">Signup</h3>
            </div>
            {/* <div className="displayConcepts"><h1>All Concepts</h1>
                {
                viewconcepts.map(({ conceptavatar }) => <img className="conceptImage" src={conceptavatar} alt={"Introduction To Python"} />
                )
            }</div> */}

            <div className="concepts">
                <h1 className="heading">Python Concepts</h1>
                <div className="concept">
                    <div className="box_12">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4 className="conceptcolor">Inroduction To Python</h4>                        
                        </div>
                        <p>A versatile and user-friendly programming language known for its simplicity and readability.</p> 
                        <a href="/introtopython.jsx"><button className="Button">Read More</button></a> 
                    </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Basic Syntax In Python</h4>
                        </div>
                        <p>It emphasizes readability and simplicity, making it an excellent language for beginners.</p>
                        <button className="Button"><a href="https://docs.google.com/document/d/1kJG_ZcTxrg3FK3E20ei5WsaK8XGcg6_oMXUJrwML12U/edit?usp=sharing">Read More</a></button>
                    </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Comments In Python</h4>
                        </div>
                        <p>you can write comments on a single line using the #.Anything after # on a line is considered a comment.</p>
                        <button className="Button"><a href="https://docs.google.com/document/d/1OBia2KQ5VGzB_ojKyJCKH-hBlJ557Lncq5llDraUOk4/edit?usp=sharing">Read More</a></button>
                    </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Variables In Python</h4>
                        </div>
                        <p>you can declare and assign multiple variables in a single line.Each variable is separated by a semicolon.</p>
                        <button className="Button"><a href="https://docs.google.com/document/d/1RaEweZtL7uIjZ9lpb0aDQsCDfaizaECyFl-1CE0xiuI/edit?usp=sharing">Read More</a></button>
                    </div>
                </div>
                <div className="concept">
                <div className="box_12">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4 className="conceptcolor">Datatypes In Python</h4>                            
                        </div>
                        <p>you can declare variables and assign values of different data types in a single line. </p>
                        <button className="Button"><a href="https://docs.google.com/document/d/10kcshnG8t48ZirsLe_zYCLEIPdcvPCt3_u_G_14uVUc/edit?usp=sharing">Read More</a></button>
                    </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Operators In Python</h4>
                        </div>
                        <p>It supports a wide range of operators, including arithmetic, comparison, logical, assignment.</p>
                        <button className="Button">Read More</button>
                    </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Conditional Statements</h4>
                        </div>
                        <p>It allow you to control the flow of your program based on certain conditions.</p>
                        <button className="Button">Read More</button>
                    </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Loops In Python</h4>
                        </div>
                        <p>It allow you to repeatedly execute a block of code. There are two types of loops in Python.</p>
                        <button className="Button">Read More</button>
                    </div>
                </div>
                <div className="concept">
                <div  className="box_12">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4 className="conceptcolor">Arrays In Python</h4>                            
                        </div>
                        <p>arrays are implemented using lists. Lists are versatile can store different data types. </p>
                        <button className="Button">Read More</button>
                    </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Strings In Python</h4>
                        </div>
                        <p>strings are sequences of characters enclosed in either single quotes ('') or double quotes (""). </p>
                        <button className="Button">Read More</button>
                    </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Lists In Python</h4>
                        </div>
                        <p>a list is a built-in data type that allows you to store and manipulate a collection of items.</p>
                        <button className="Button">Read More</button>
                    </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Sets In Python</h4>
                        </div>
                        <p>set is an unordered collection of unique elements and implemented as built-in data type </p>
                        <button className="Button">Read More</button>
                    </div>
                </div>
                <div className="concept">
                    <div className="box_12">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4 className="conceptcolor">Tuples In Python</h4>                            
                        </div>
                        <p>a tuple is an ordered, immutable collection of elements. Tuples are similar to lists</p>
                        <button className="Button">Read More</button>
                    </div>
                        <div className="box_11">
                            <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Dictionary In Python</h4>
                            </div>
                            <p>Dictionary is an unordered collection of key-value pairs. It is a built-in data type.</p>
                            <button className="Button">Read More</button>
                        </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Functions In Python</h4>
                        </div>
                        <p>It is a block of reusable code that performs a specific task.It provide a way to structure your code, </p>
                        <button className="Button">Read More</button>
                    </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Files In Python</h4>
                        </div>
                        <p>It allows you to read from and write to files on your computer.It allows you to work with various formats </p>
                        <button className="Button">Read More</button>
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
                    <h2>SHecode is enhance for Learning</h2>
                </div>
            </div>
        </div>
    )
}

export default Tutorial;