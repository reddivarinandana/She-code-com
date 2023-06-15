import React from "react";
import { useState } from "react";
import './Homepage.css';

function HomePage(){
    return(
        <div>
            <div className="navbar">
                <h1 className="logo"><span style={{color:"#FFA500"}}>S</span><span style={{color:"blue"}}>H</span>ecodes</h1>
                <h3 className="tutorial">Tutorial</h3>
                <h3 className="video">Videos</h3>
                {/* <h3 className="quiz">Quiz</h3> */}
                <h3 className="test">Test</h3>
                <h3 className="signup">Signup</h3>
            </div>
            <div className="educationImage">
                <h1 className="quote">Education is the most powerful<br/> weapon which you can use<br/> to change the world.</h1>
                <button className="button">Get Started</button>
            </div>
            <div className="container">
                <div className="Layout1"><img className="image1" src="/resources/image1.jpeg" alt="" />"Python is a powerful tool for education, as it combines simplicity and versatility."</div>
                <div className="Layout2"><img className="image1" src="/resources/image2.jpeg" alt="" />"Python is a great language for beginners because it is readable and emphasizes good programming practices."</div>
                <div className="Layout3"><img className="image1" src="/resources/image3.jpeg" alt="" />"Python is like a Swiss Army knife for programming education." </div>
                <div className="Layout4"><img className="image1" src="/resources/image4.jpeg" alt="" />"Python is a language that allows you to think of problems at a higher level and express them in a concise and elegant way." </div>
            </div>
            <div className="concepts">
                <h1 className="heading">Python Concepts</h1>
                <div className="concept">
                    <div>
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4 className="conceptcolor">Inroduction To Python</h4>                        
                        </div>
                        <p>A versatile and user-friendly programming language known for its simplicity and readability.</p> 
                        <button className="Button">Read More</button>   
                    </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Basic Syntax In Python</h4>
                        </div>
                        <p>It emphasizes readability and simplicity, making it an excellent language for beginners.</p>
                        <button className="Button">Read More</button>
                    </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Comments In Python</h4>
                        </div>
                        <p>you can write comments on a single line using the #.Anything after # on a line is considered a comment.</p>
                        <button className="Button">Read More</button>
                    </div>
                    <div className="box_11">
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4>Variables In Python</h4>
                        </div>
                        <p>you can declare and assign multiple variables in a single line.Each variable is separated by a semicolon.</p>
                        <button className="Button">Read More</button>
                    </div>
                </div>
                <div className="concept">
                <div>
                        <div id="box_10">
                            <img className="pythonlogo" src="/resources/pythonlogo.png" alt="" />
                            <h4 className="conceptcolor">Datatypes In Python</h4>                            
                        </div>
                        <p>you can declare variables and assign values of different data types in a single line. </p>
                        <button className="Button">Read More</button>
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
                <div>
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
                    <div>
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
                    <h2>SHecodes is enhance for Learning</h2>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;