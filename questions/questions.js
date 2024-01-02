const questions = [
    {
        question: "What does 'DOM' stand for in JavaScript?",
        correctAnswer: "Document Object Model",
        wrongAnswer1: "Data Object Model",
        wrongAnswer2: "Digital Object Memory",
        wrongAnswer3: "Dynamic Output Mechanism"
    },
    {
        question: "What is the purpose of 'let' keyword in JavaScript?",
        correctAnswer: "To declare block-scoped variables",
        wrongAnswer1: "To declare global variables",
        wrongAnswer2: "To declare constant variables",
        wrongAnswer3: "To declare function-scoped variables"
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        correctAnswer: "push()",
        wrongAnswer1: "add()",
        wrongAnswer2: "append()",
        wrongAnswer3: "insert()"
    },
    {
        question: "What is the result of '5' + 3 in JavaScript?",
        correctAnswer: "53",
        wrongAnswer1: "8",
        wrongAnswer2: "35",
        wrongAnswer3: "Error"
    },
    {
        question: "What is the purpose of 'this' keyword in JavaScript?",
        correctAnswer: "Refers to the current object",
        wrongAnswer1: "Refers to the parent object",
        wrongAnswer2: "Refers to the child object",
        wrongAnswer3: "Refers to the global object"
    },
    {
        question: "What is the difference between '=='' and '===' in JavaScript?",
        correctAnswer: "'===' checks both value and type, '==' checks only value",
        wrongAnswer1: "'===' checks only value, '==' checks both value and type",
        wrongAnswer2: "'===' is the same as '==' in all cases",
        wrongAnswer3: "There is no difference"
    },
    {
        question: "Which built-in method is used to sort an array in JavaScript?",
        correctAnswer: "sort()",
        wrongAnswer1: "order()",
        wrongAnswer2: "arrange()",
        wrongAnswer3: "concat()"
    },
    {
        question: "What is the purpose of the 'map' function in JavaScript?",
        correctAnswer: "Creates a new array with the results of calling a provided function on every element in the array",
        wrongAnswer1: "Adds a new element to the array",
        wrongAnswer2: "Removes elements from the array",
        wrongAnswer3: "Concatenates two arrays"
    },
    {
        question: "What is the 'closure' in JavaScript?",
        correctAnswer: "A function that has access to the variables in its lexical scope, even when the function is executed outside that scope",
        wrongAnswer1: "A function with no access to any variables",
        wrongAnswer2: "A function that only accepts closures as arguments",
        wrongAnswer3: "A function that is closed for modification"
    },
    {
        question: "How do you declare a constant variable in JavaScript?",
        correctAnswer: "Using the 'const' keyword",
        wrongAnswer1: "Using the 'let' keyword",
        wrongAnswer2: "Using the 'var' keyword",
        wrongAnswer3: "Constants are not supported in JavaScript"
    },
    {
        question: "What is the purpose of 'use strict' in JavaScript?",
        correctAnswer: "Enforces a stricter set of rules and prevents the use of certain error-prone features",
        wrongAnswer1: "Declares a variable with strict typing",
        wrongAnswer2: "Allows the use of deprecated features",
        wrongAnswer3: "Initiates a secure connection to the server"
    },
    {
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        correctAnswer: "'null' is explicitly assigned by the programmer, while 'undefined' is the default value of uninitialized variables",
        wrongAnswer1: "'null' is the default value of uninitialized variables, while 'undefined' is explicitly assigned by the programmer",
        wrongAnswer2: "They are interchangeable and can be used in the same way",
        wrongAnswer3: "'undefined' is used for null values, and 'null' is used for undefined values"
    },
    {
        question: "How do you check the type of a variable in JavaScript?",
        correctAnswer: "Using the 'typeof' operator",
        wrongAnswer1: "Using the 'type' property",
        wrongAnswer2: "Using the 'checkType' function",
        wrongAnswer3: "There is no way to check the type of a variable"
    },
    {
        question: "What is the purpose of the 'Promise' object in JavaScript?",
        correctAnswer: "Represents the eventual completion or failure of an asynchronous operation and its resulting value",
        wrongAnswer1: "Ensures synchronous execution of code",
        wrongAnswer2: "Handles regular expressions in JavaScript",
        wrongAnswer3: "Manipulates DOM elements asynchronously"
    },
    {
        question: "How can you prevent a form from submitting in JavaScript?",
        correctAnswer: "Using the event.preventDefault() method",
        wrongAnswer1: "By setting the 'formSubmit' property to 'false'",
        wrongAnswer2: "Using the 'stopPropagation' method",
        wrongAnswer3: "There is no way to prevent form submission in JavaScript"
    },
    {
        question: "What is a closure in JavaScript?",
        correctAnswer: "A function that has access to the variables in its lexical scope, even when the function is executed outside that scope",
        wrongAnswer1: "A built-in method for closing browser tabs",
        wrongAnswer2: "A way to lock down code to prevent modifications",
        wrongAnswer3: "A function that only accepts closures as arguments"
    },
    {
        question: "What does the 'bind' method do in JavaScript?",
        correctAnswer: "Creates a new function that, when called, has its 'this' keyword set to a specific value",
        wrongAnswer1: "Binds two functions together into one",
        wrongAnswer2: "Attaches an event listener to an element",
        wrongAnswer3: "Binds a value to a variable"
    },
    {
        question: "What is the purpose of the 'async' and 'await' keywords in JavaScript?",
        correctAnswer: "'async' is used to define asynchronous functions, and 'await' is used to pause the execution of an asynchronous function until a promise is resolved",
        wrongAnswer1: "'async' is used to make functions synchronous, and 'await' is used to handle errors",
        wrongAnswer2: "'async' is used to handle errors, and 'await' is used to define asynchronous functions",
        wrongAnswer3: "'async' and 'await' have the same purpose"
    },
    {
        question: "What is the 'spread' operator in JavaScript used for?",
        correctAnswer: "Allows an iterable to be expanded in places where multiple arguments or elements are expected",
        wrongAnswer1: "Combines two arrays into one",
        wrongAnswer2: "Reverses the order of elements in an array",
        wrongAnswer3: "Creates a shallow copy of an array"
    },
    {
        question: "What is the purpose of the 'localStorage' object in JavaScript?",
        correctAnswer: "Stores key-value pairs in a web browser with no expiration time",
        wrongAnswer1: "Stores data on the server",
        wrongAnswer2: "Creates a temporary storage for session data",
        wrongAnswer3: "Deletes cookies in the browser"
    },
]

export { questions };