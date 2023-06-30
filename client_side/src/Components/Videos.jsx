import React from "react";
import { useState } from "react";
import './Videos.css';

function Video(){
    const ConceptsData = [{
        id: "1",
        conceptName: "Introduction To Python",
        conceptAvatar: "",
        content:<pre>Python is a popular high-level programming language known for its simplicity, readability, and versatility. 
                      It was created by Guido van Rossum and first released in 1991. 
                      Python emphasizes code readability, making it easy to understand and write, which is why it is often recommended for beginners. 
                      Here are some key features and aspects of Python: 
                      Readability:
                      Python's syntax is designed to be easy to read and understand, using indentation and a straightforward syntax that resembles natural language.
                      Versatility: 
                      Python is a general-purpose language that can be used for a wide range of applications, including web development, data analysis, artificial intelligence, scientific computing, automation, scripting, and more. 
                      Large Standard Library: 
                      Python comes with a rich standard library that provides pre-built modules and functions for various tasks, such as working with files, network communication, data processing, and more. 
                      This extensive library makes it easier to accomplish many programming tasks without having to write everything from scratch. 
                      Third-Party Libraries: 
                      Python has a vast ecosystem of third-party libraries and frameworks, such as Django for web development, NumPy for numerical computing, Pandas for data analysis, TensorFlow for machine learning, and many more. 
                      These libraries extend Python's capabilities and make it even more powerful for specific domains.
                      Interpreted Language:
                      Python is an interpreted language, which means that code is executed line by line without the need for compilation. This enables faster development cycles and easier debugging.
                      Cross-Platform:
                      Python is available on multiple platforms, including Windows, macOS, and various Unix-based systems. This allows you to write code once and run it on different operating systems without making significant changes.
                      Community and Support: 
                      Python has a large and active community of developers worldwide. The community contributes to the development of libraries, frameworks, and tools, and provides support through forums, online resources, and user groups.
                            Python is often praised for its simplicity, which makes it an excellent choice for beginners learning to code.
                      It also offers advanced features and scalability, allowing developers to build complex and robust applications. 
                      Whether you are a beginner or an experienced programmer, Python provides a versatile and powerful toolset for various programming tasks.
                </pre>,
        video: "https://www.youtube.com/watch?v=LajgX-9nNB8&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR"
    },
    // {
    //     id: "2",
    //     conceptName: "Basic Syntax of Python",
    //     conceptavatar: "https://www.tutorialinhindi.com/wp-content/uploads/2021/12/syntax-of-python-in-hindi-1024x576.png",
    //     content:<pre>
    //                     Syntax in Python refers to the set of rules and guidelines that define the structure and composition of the Python programming language.
    //                     It specifies how statements and expressions should be written to create valid Python programs.
    //                     Here are some key aspects of Python's syntax:
    //                     Indentation: Python uses indentation (typically four spaces) to define the structure and hierarchy of code blocks. 
    //                     Indentation is crucial in Python as it determines the scope of statements within loops, functions, conditionals, and classes.
    //                     Example:
    //                             if x > 5:
    //                                 print("x is greater than 5")
    //                             else:
    //                                 print("x is less than or equal to 5"),
    //             </pre>
    //     video: "https://www.youtube.com/watch?v=drfr-jrkQjg.mp4"
    // },
    {
        id: "3",
        conceptName: "Comments In Python",
        conceptavatar: "https://www.javainterviewpoint.com/wp-content/uploads/2020/06/Python-Comments-1.png",
        content: <pre>
                    In Python, comments are used to add explanatory notes or annotations within the code that are
                    ignored by the interpreter when the program is executed. Comments help improve code readability,
                    provide explanations, and make it easier for others (including yourself) to 
                    understand the code's purpose and functionality.
                    Python supports two types of comments:
                    Single-line comments:
                        Single-line comments start with the # (hash) symbol and continue 
                        until the end of the line. Anything written after the # symbol on the same line is 
                        considered a comment and is ignored by the interpreter.

                    Example:
                        # This is a single-line comment
                        x = 10  # This assigns the value 10 to the variable x.
                    Multi-line comments: 
                        Multi-line comments, also known as docstrings, are used for longer
                        comments that span multiple lines. They are enclosed between triple quotes (''' or """)
                        and can be used to document entire functions, classes, or modules.


                 </pre>,
        video: "https://www.youtube.com/watch?v=WWYi6_EliQY"
    },
    {
        id: "4",
        conceptName: "Variables In Python",
        conceptavatar: "https://devqa.io/assets/images/python-variables.png",
        content:<pre>
                        variables in Python are like containers or boxes that can hold 
                    different kinds of information. They have names that you give them, allowing you to refer
                    to the stored information by using the variable name.
                    You can think of variables as labels that you attach to values. For example, you can have 
                    a variable called "age" that stores the number 25, or a variable called "name" that stores the 
                    string "John". By using these variable names, you can access and manipulate the values 
                    stored inside them throughout your program.

                        Variables are useful because they make your code more flexible and reusable. Instead of 
                    repeating the same value over and over again, you can store it in a variable and refer to that 
                    variable wherever needed. This way, if the value ever needs to change, you only have to 
                    update it in one place (the variable), and the change will be reflected wherever the variable is used.

                    Here's a simple example:

                    name = "Alice"  # The variable "name" is assigned the value "Alice"
                    age = 30  # The variable "age" is assigned the value 30
                    print("My name is", name)  # Output: My name is Alice
                    print("I am", age, "years old")  # Output: I am 30 years old
                    age = 31  # The variable "age" is reassigned the value 31
                    print("Actually, I am now", age, "years old")  # Output: Actually, I am now 31 years old

                        In this example, we declare variables named "name" and "age" and assign them values. We 
                    then use these variables to print out a message. Later, we update the value of the "age" 
                    variable and use it again to print an updated message.
                </pre>,
        video: "https://www.youtube.com/watch?v=Aa8gnmhUxG8&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=3"
    },
    {
        id: "5",
        conceptName: "Datatypes In Python",
        conceptavatar: "https://cdn.activestate.com/wp-content/uploads/2019/10/Python-data-types_hero.png",
        content: <pre>
                    Python provides several built-in data types to represent different kinds of information. Here 
                    are some commonly used data types in Python:
                    Numeric Types:

                    int: Represents integers (whole numbers), such as 5, -3, 100.
                    float: Represents floating-point numbers with decimal values, such as 3.14, -0.5, 2.0.
                    String:

                    str: Represents a sequence of characters enclosed in single quotes ('') or double quotes ("").
                    Boolean:

                    bool: Represents a logical value that can be either True or False.
                    List:

                    list: Represents an ordered collection of elements enclosed in square brackets ([]). Lists can contain elements of different data types and can be modified.
                    Tuple:

                    tuple: Similar to lists, but enclosed in parentheses (()). Tuples are immutable, meaning their elements cannot be changed once defined.
                    Dictionary:

                    dict: Represents an unordered collection of key-value pairs enclosed in curly braces ({}). Each element in a dictionary consists of a key and its corresponding value.
                    Set:

                    set: Represents an unordered collection of unique elements. Sets are enclosed in curly braces ({}).
                    None:

                    NoneType: Represents the absence of a value. It is commonly used to indicate the 
                    absence of a return value from a function or the uninitialized state of a variable.

                    These are just a few of the built-in data types in Python. Additionally, Python allows you to 
                    create your own custom data types using classes and objects.
                </pre>,
        video: "https://www.youtube.com/watch?v=KBngIxJkizo"
    },
    {
        id: "6",
        conceptName: "Operators In Python",
        conceptavatar: "https://www.aipython.in/wp-content/uploads/2020/04/Python-operators-1024x576.jpg",
        content: "",
        video: "https://www.youtube.com/watch?v=3gtA80xXmQY"
    },
    {
        id: "7",
        conceptName: "Conditional Statements",
        conceptavatar: "https://www.shiksha.com/online-courses/articles/wp-content/uploads/sites/11/2022/02/Conditional-Statements-in-Python.png",
        content: "",
        video: "https://www.youtube.com/watch?v=JEyXjMg6F1A&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=9"
    },
    {
        id: "8",
        conceptName: "Loops In Python",
        conceptavatar: "https://d2o2utebsixu4k.cloudfront.net/media/images/d75c6b07-df94-46c6-b5bb-6632fa44dd38.png",
        content: "",
        video: "https://www.youtube.com/watch?v=AxQCHOXP6XA&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=11"
    },
    {
        id: "9",
        conceptName: "Arrays In Python",
        conceptavatar: "https://static.javatpoint.com/python/images/python-2d-array.png",
        content: "",
        video: "https://www.youtube.com/watch?v=hhDMjL0xQlA"
    },
    {
        id: "10",
        conceptName: "Strings In Python",
        conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiH0UGfLBLZ93sRF_-Z9acZwpaTxfIbJLMuA&usqp=CAU",
        content: "",
        video: "https://www.youtube.com/watch?v=RuUUwGuMjKY"
    },
    {
        id: "11",
        conceptName: "Lists In Python",
        conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6FqLzmXWflmvsTxp46WIP_j1PDZnzRDXuA&usqp=CAU",
        content: "",
        video: "https://www.youtube.com/watch?v=orVZ4MS5YxY&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=4"
    },
    {
        id: "12",
        conceptName: "Sets In Python",
        conceptavatar: "https://www.trytoprogram.com/images/python_sets.jpg",
        content: "",
        video: "https://www.youtube.com/watch?v=rogCt-z3fR8&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=6"
    },
    {
        id: "13",
        conceptName: "Tuples In Python",
        conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fU8L_3fxSb0W1mZpla39xAkUWMVBdhE_tw&usqp=CAU",
        content: "",
        video: "https://www.youtube.com/watch?v=HebH4ybHAtw&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=5"
    },
    {
        id: "14",
        conceptName: "Dictionary In Python",
        conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS827lLmWkZDWdc6Z8zEEsv5Ec_BedMwlyJEg&usqp=CAU",
        content: "",
        video: "https://www.youtube.com/watch?v=KFPKuLEzNBs&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=7"
    },
    {
        id: "15",
        conceptName: "Functions In Python",
        conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXC83cieiHJNi89MJlv3jCMfOF-UUDCO1TDQ9ibpchnl8aUBb2vbFXAcvR1O-Q1Pr6RXg&usqp=CAU",
        content: "",
        video: "https://www.youtube.com/watch?v=KK3W0cMXArg&list=PLC2mgeYbYNm-3aTUq98pbmrA3P1_m-aJR&index=13"
    },
    {
        id: "16",
        conceptName: "Files In Python",
        conceptavatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLRKGjS60VzI-z3tFWED7T1yfO1MmjUoUILvUF67CJoU19lPkTWBeX6_b1Eazz7zE6kI&usqp=CAU",
        content: "",
        video: "https://www.youtube.com/watch?v=-ogMBxqsJkw"
    }];
    localStorage.setItem("video", JSON.stringify(ConceptsData));
    let viewoneconcepts = JSON.parse(localStorage.getItem("video"));
    const renderVideos = () =>{
        viewoneconcepts.map()
    }
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
            <div>
                <h2>All Videos</h2>
            </div>
            <div className="displayVideos">
               
               {
                viewoneconcepts?.map(({ conceptName,conceptAvatar, video }) => (
                    <div className="div" key={conceptName}>
                        {/* <div><img className="image11" src="/resources/pythonlogo.png" alt="" /></div> */}

                        <div>
                            <a href={video} target ="_blank" type="video/mp4"><img className="image10" src="/resources/youtubelogo.png" alt="" /></a>
                        </div>

                        {/* <a width="250" href={video} target="_blank" type="video/mp4">
                        {conceptName}
                        {conceptAvatar}
                        </a> */}
                    <p className="colour">{conceptName}</p>
                    <p>{conceptAvatar}</p>
                    </div>
                ))
                }
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