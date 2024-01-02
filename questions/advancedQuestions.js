const advancedQuestions = [
    {
        question: "What is a closure in JavaScript, and how does it improve code?",
        correctAnswer: "A closure is a function that has access to variables from its outer (enclosing) scope, even after that scope has finished execution. It improves code by enabling data encapsulation and the creation of private variables.",
        wrongAnswer1: "A closure is a function that only executes once.",
        wrongAnswer2: "A closure is a built-in JavaScript class for handling asynchronous operations.",
        wrongAnswer3: "A closure is a method for defining classes in JavaScript."
    },
    {
        question: "Explain the concept of prototypal inheritance in JavaScript.",
        correctAnswer: "Prototypal inheritance is a mechanism in JavaScript where objects inherit properties and methods directly from other objects. Each object has an internal link to another object called its prototype.",
        wrongAnswer1: "Prototypal inheritance is a way to inherit properties and methods from a class.",
        wrongAnswer2: "Prototypal inheritance is only applicable to built-in JavaScript objects.",
        wrongAnswer3: "Prototypal inheritance is a deprecated feature in modern JavaScript."
    },
    {
        question: "What are JavaScript Promises, and how do they differ from callbacks?",
        correctAnswer: "Promises are objects representing the eventual completion or failure of an asynchronous operation. They differ from callbacks by providing better readability and avoiding callback hell.",
        wrongAnswer1: "Promises are a type of callback function in JavaScript.",
        wrongAnswer2: "Promises can only handle synchronous operations.",
        wrongAnswer3: "Callbacks provide better readability compared to Promises."
    },
    {
        question: "Explain the event loop in JavaScript and how it handles asynchronous tasks.",
        correctAnswer: "The event loop is a mechanism that allows JavaScript to perform non-blocking operations. It continuously checks the message queue and executes tasks in a single-threaded, asynchronous manner.",
        wrongAnswer1: "The event loop is responsible for blocking operations in JavaScript.",
        wrongAnswer2: "The event loop is only applicable in server-side JavaScript.",
        wrongAnswer3: "The event loop is a feature specific to multi-threaded programming in JavaScript."
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        correctAnswer: "The 'this' keyword refers to the object that is currently executing the function. Its value is determined by how a function is called.",
        wrongAnswer1: "'this' always refers to the global object in JavaScript.",
        wrongAnswer2: "'this' is used to create new objects in JavaScript.",
        wrongAnswer3: "'this' is only applicable within arrow functions in JavaScript."
    },
    {
        question: "Explain the differences between the 'let', 'const', and 'var' keywords in JavaScript.",
        correctAnswer: "'let' and 'const' are block-scoped, while 'var' is function-scoped. 'const' is used to declare constants, and 'let' and 'var' are used for variables with reassignment capability.",
        wrongAnswer1: "'var' is block-scoped in JavaScript.",
        wrongAnswer2: "'let' and 'const' are interchangeable in JavaScript.",
        wrongAnswer3: "'const' is used to declare variables with reassignment capability."
    },
    {
        question: "What is the purpose of the JavaScript 'Symbol' data type?",
        correctAnswer: "Symbols are unique and immutable values that can be used as keys for object properties, preventing unintentional property name collisions.",
        wrongAnswer1: "Symbols are used for storing numeric values in JavaScript.",
        wrongAnswer2: "Symbols are a deprecated feature in modern JavaScript.",
        wrongAnswer3: "Symbols can be mutated after their creation."
    },
    {
        question: "What is the difference between '=='' and '===' in JavaScript?",
        correctAnswer: "'===' checks both value and type, while '==' checks only value. '===' is known as the strict equality operator.",
        wrongAnswer1: "'===' and '==' are interchangeable in JavaScript.",
        wrongAnswer2: "'===' and '==' both check both value and type.",
        wrongAnswer3: "'==' is the strict equality operator in JavaScript."
    },
    {
        question: "Explain the concept of the 'Rest Parameter' in JavaScript functions.",
        correctAnswer: "The 'Rest Parameter' allows a function to accept an indefinite number of arguments as an array. It is denoted by the use of three dots (...).",
        wrongAnswer1: "The 'Rest Parameter' is used to limit the number of arguments a function can accept.",
        wrongAnswer2: "The 'Rest Parameter' is only applicable to arrow functions.",
        wrongAnswer3: "The 'Rest Parameter' is a deprecated feature in JavaScript."
    },
    {
        question: "What is the purpose of the 'Proxy' object in JavaScript?",
        correctAnswer: "The 'Proxy' object is used to create a custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration) on objects.",
        wrongAnswer1: "The 'Proxy' object is used for asynchronous programming in JavaScript.",
        wrongAnswer2: "The 'Proxy' object is only applicable to built-in JavaScript objects.",
        wrongAnswer3: "The 'Proxy' object is a deprecated feature in modern JavaScript."
    },
    {
        question: "Explain the concept of 'Hoisting' in JavaScript.",
        correctAnswer: "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.",
        wrongAnswer1: "Hoisting only applies to function declarations, not variable declarations.",
        wrongAnswer2: "Hoisting is a feature specific to asynchronous programming in JavaScript.",
        wrongAnswer3: "Hoisting can be turned off using the 'strict mode'."
    },
    {
        question: "What are JavaScript 'Generators,' and how are they different from regular functions?",
        correctAnswer: "Generators are functions that can be paused and resumed, allowing for the generation of a sequence of values. They are created using function* syntax and the 'yield' keyword.",
        wrongAnswer1: "Generators are functions that can only be called once.",
        wrongAnswer2: "Generators are a type of built-in JavaScript object.",
        wrongAnswer3: "Generators can only be used for synchronous operations."
    },
    {
        question: "Explain the concept of 'Memoization' in JavaScript and why it is used.",
        correctAnswer: "Memoization is a technique used to optimize the performance of functions by caching their results based on the input parameters. It helps avoid redundant computations for previously solved problems.",
        wrongAnswer1: "Memoization is only applicable to asynchronous functions.",
        wrongAnswer2: "Memoization is a deprecated feature in modern JavaScript.",
        wrongAnswer3: "Memoization can only be applied to pure functions."
    },
    {
        question: "What is the purpose of the 'WeakMap' object in JavaScript?",
        correctAnswer: "A 'WeakMap' is a collection of key/value pairs where keys are objects and values can be arbitrary. Unlike a 'Map', a 'WeakMap' does not prevent its keys from being garbage collected.",
        wrongAnswer1: "A 'WeakMap' is used for creating maps with strong key references.",
        wrongAnswer2: "A 'WeakMap' is a deprecated feature in modern JavaScript.",
        wrongAnswer3: "A 'WeakMap' is only applicable to primitive data types."
    },
    {
        question: "Explain the concept of 'Currying' in JavaScript functions.",
        correctAnswer: "Currying is a technique where a function is transformed into a sequence of unary functions, each taking a single argument. It allows partial application of the function, creating new functions with fewer arguments.",
        wrongAnswer1: "Currying is a way to combine multiple functions into one.",
        wrongAnswer2: "Currying is a deprecated feature in modern JavaScript.",
        wrongAnswer3: "Currying can only be applied to synchronous functions."
    },
    {
        question: "What is the purpose of the JavaScript 'Symbol.iterator' method?",
        correctAnswer: "The 'Symbol.iterator' method is used to define custom iteration behavior for an object. When an object has a 'Symbol.iterator' method, it becomes iterable, allowing it to be used in 'for...of' loops.",
        wrongAnswer1: "The 'Symbol.iterator' method is used for comparing two objects in JavaScript.",
        wrongAnswer2: "The 'Symbol.iterator' method is only applicable to arrays.",
        wrongAnswer3: "The 'Symbol.iterator' method is a deprecated feature in modern JavaScript."
    },
    {
        question: "What is the 'Zone' concept in JavaScript, and how does it relate to asynchronous operations?",
        correctAnswer: "A 'Zone' is an execution context that encapsulates asynchronous operations. It allows tracking and intercepting asynchronous tasks, enabling better error handling and debugging.",
        wrongAnswer1: "A 'Zone' is a deprecated feature in modern JavaScript.",
        wrongAnswer2: "A 'Zone' is only applicable to synchronous operations.",
        wrongAnswer3: "A 'Zone' is a type of loop in JavaScript."
    },
    {
        question: "Explain the concept of 'Web Workers' in JavaScript.",
        correctAnswer: "Web Workers are a way to run JavaScript code in the background, independently of the main thread. They enable parallel processing and improve performance in multi-core systems.",
        wrongAnswer1: "Web Workers are used for handling user input in JavaScript.",
        wrongAnswer2: "Web Workers can only be used in server-side JavaScript.",
        wrongAnswer3: "Web Workers are a deprecated feature in modern browsers."
    },
    {
        question: "What is 'Event Delegation' in JavaScript, and how does it work?",
        correctAnswer: "Event Delegation is a technique where a single event listener is attached to a common ancestor of multiple elements. It leverages event bubbling to handle events on child elements, reducing the number of event listeners.",
        wrongAnswer1: "Event Delegation is a way to stop event propagation in JavaScript.",
        wrongAnswer2: "Event Delegation is only applicable to synchronous events.",
        wrongAnswer3: "Event Delegation is a deprecated feature in modern JavaScript."
    },
    {
        question: "Explain the concept of 'Immutable Data' in JavaScript and its benefits.",
        correctAnswer: "Immutable data refers to data that cannot be modified after creation. It simplifies state management, enhances predictability, and helps prevent unintended side effects in a program.",
        wrongAnswer1: "Immutable data is only applicable to primitive data types.",
        wrongAnswer2: "Immutable data is a deprecated feature in modern JavaScript.",
        wrongAnswer3: "Immutable data is primarily used for asynchronous programming."
    }
    // Add more questions as needed
    // ...
];


export { advancedQuestions }