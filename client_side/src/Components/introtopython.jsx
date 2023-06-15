import React from "react";
import './introtopython.css';

function Introduction(){
    return(
        <div>
            {/* <div className="navbar">
                <h1 className="logo"><span style={{color:"#FFA500"}}>S</span><span style={{color:"blue"}}>H</span>ecodes</h1>
                <h3 className="tutorial">Tutorial</h3>
                <h3 className="video">Videos</h3>
                 <h3 className="quiz">Quiz</h3> 
                <h3 className="test">Test</h3>
                <h3 className="signup">Signup</h3>
            </div> */}
                <div className="Introdiv">
                    <div className="IntroductionPart">
                        <h1 className="head">Introduction To Python</h1>
                        <p>Python is a programming language that people use to make computers do different things. It's like a set of instructions that we can give to a computer to make it do specific tasks.
                            Python is popular because it's easy to read and write. It uses words and symbols that are simple to understand, even for beginners. It's a great language to start learning about programming.
                            With Python, we can do many exciting things. We can create games, build websites, analyze data, and even control robots! It's like having a superpower to control technology and make it work the way we want.
                            In Python, we write our instructions or commands in a special way. These commands are called "code." We write the code in a text file using a program called a "text editor" or an "IDE" (Integrated Development Environment).
                        </p>
                        <h2 className="head2">Example</h2>
                        <p className="example">print("Hello, world!")</p>

                        <p>In this code, we're telling the computer to print the words "Hello, world!" on the screen. When we run this code, we'll see those words appear.
                            Python also allows us to do math calculations. We can add numbers, subtract them, multiply them, and even do more complex operations. Here's an example:
                        </p>
                        <h2 className="head2">Example</h2>
                        <p className="example">result = 5 + 3<br/>
                            print(result)</p> 

                        <p>In this code, we're adding the numbers 5 and 3 together. The result will be 8, and the computer will show that on the screen.
                            Python is a powerful tool that lets us solve problems and create cool things. It's used by scientists, engineers, and programmers all around the world. Learning Python can open up many opportunities for us in the future.
                            Remember, programming with Python is like giving instructions to a computer to make it do what we want. It's like learning a new language, but instead of talking to people, we're talking to computers.
                        </p>
                        <h2 className="head">Go With Youtube Video</h2>
                        <h2 className="head"><a href="https://www.youtube.com/watch?v=LajgX-9nNB8&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR" ><img className="introImage" src="/resources/introimage.png" alt="" /></a></h2>
                    </div>
                    <div>
                        <h1 className="Quiz">Python Quiz</h1>
                        <p>You can test your Python skills with SHecodes Quiz.</p>
                        <h1 className="Quiz">The Test</h1>
                        <p>The test has 25 questions for you to answer, and you can take as much time as you need. There is no hurry or time pressure, so you can carefully think about each question and provide your answers without feeling rushed.</p>
                        <h1 className="Quiz">Count Your Score</h1>
                        <p>For every question you answer correctly in the quiz, you will earn 1 point. When the quiz is finished, your total score, which can be a maximum of 25 points, will be shown to you. So, the more questions you answer correctly, the higher your score will be.</p>
                        <p>Start Quiz Good Luck</p>
                        <button className="btn">Start Quiz</button>
                    </div>
                </div>
        </div>
    )
}

export default Introduction