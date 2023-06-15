import React from "react";

function Syntax(){
    return(
        <div>
            <div className="syntaxpart">
                <p>In Python, "syntax" refers to the rules and structure that define how you write code in the language. It's like following a set of grammar rules when writing a sentence in English.

                    Python has specific syntax rules that you need to follow in order for the computer to understand and execute your code correctly. If you make a mistake in the syntax, the computer may show an error or not work as expected.

                    Here are a few important syntax rules in Python:

                    Indentation: Python uses indentation, typically with four spaces, to define blocks of code. It's important to indent your code correctly to show which statements belong together. For example:
                    python
                        if x > 5:
                        print("x is greater than 5")
                    Statements: Each instruction or action in Python is written as a separate statement. Statements are usually written on separate lines. For example:
                    python
                        x = 10
                        print(x)
                    Comments: Comments are used to explain your code and are ignored by the computer when running the program. They start with a # symbol. For example:
                    python
                        # This is a comment explaining the code below
                        x = 5  # Assigning a value to variable x
                    Variables and Data Types: When creating variables, you need to follow certain naming rules and conventions. Python is case-sensitive, so myVariable and myvariable would be treated as different variables. Additionally, Python has different data types like numbers, strings (text), lists, etc., which have their own syntax rules.
                    These are just a few examples of syntax in Python. As you learn more about Python, you will come across additional syntax rules and structures specific to different programming concepts and constructs.

                    Remember, paying attention to the syntax is important because it helps the computer understand and execute your instructions correctly.
                </p>
            </div>
        </div>
    )
}

export default Syntax