export const hardJavaScriptQuestions = [
  {
    question: "What is the result of typeof null in JavaScript?",
    correctAnswer: "object",
    wrongAnswer1: "null",
    wrongAnswer2: "undefined",
    wrongAnswer3: "string",
  },
  {
    question: "Explain the concept of 'Temporal Dead Zone' in JavaScript.",
    correctAnswer:
      "The period between entering the scope and the actual declaration of a variable, during which it cannot be accessed.",
    wrongAnswer1: "The time when a variable is garbage collected.",
    wrongAnswer2: "A phase during the interpretation of date objects.",
    wrongAnswer3: "A stage in the execution of asynchronous functions.",
  },
  {
    question: "What is the purpose of the JavaScript 'Proxy' object?",
    correctAnswer:
      "To create custom behavior for fundamental operations on objects.",
    wrongAnswer1: "To handle asynchronous operations in JavaScript.",
    wrongAnswer2: "To create dynamic prototypes for objects.",
    wrongAnswer3: "To define private variables in objects.",
  },
  {
    question:
      "Explain the differences between 'let' and 'const' in terms of variable reassignment.",
    correctAnswer: "'let' allows reassignment, while 'const' does not.",
    wrongAnswer1: "'const' allows reassignment but 'let' does not.",
    wrongAnswer2: "Both 'let' and 'const' allow reassignment.",
    wrongAnswer3: "Neither 'let' nor 'const' allows reassignment.",
  },
  {
    question: "What is the purpose of the JavaScript 'WeakMap' object?",
    correctAnswer:
      "To create a collection of key/value pairs with weakly held object references.",
    wrongAnswer1: "To store maps with strong key references.",
    wrongAnswer2: "To create a map with primitive data types only.",
    wrongAnswer3: "To prevent garbage collection of object references.",
  },
  {
    question:
      "Explain the difference between 'Promises' and 'Observables' in JavaScript.",
    correctAnswer:
      "'Promises' handle a single asynchronous event, while 'Observables' handle multiple asynchronous events over time.",
    wrongAnswer1: "'Observables' are a modern replacement for 'Promises'.",
    wrongAnswer2: "'Promises' are used for synchronous operations.",
    wrongAnswer3: "'Observables' can only be used in server-side JavaScript.",
  },
  {
    question:
      "What is the purpose of the 'super' keyword in JavaScript classes?",
    correctAnswer: "To call methods on the parent class.",
    wrongAnswer1: "To create instances of the parent class.",
    wrongAnswer2: "To access private variables in the parent class.",
    wrongAnswer3: "To prevent inheritance in a class hierarchy.",
  },
  {
    question: "Explain the concept of 'Tail Call Optimization' in JavaScript.",
    correctAnswer:
      "A technique where the last function call in a stack is optimized to avoid stack overflow.",
    wrongAnswer1: "A way to optimize recursive functions only.",
    wrongAnswer2:
      "A method for optimizing the call stack in asynchronous functions.",
    wrongAnswer3:
      "A feature that enables optimization of function calls in the middle of the stack.",
  },
  {
    question: "What is the purpose of the 'Object.is()' method in JavaScript?",
    correctAnswer:
      "To compare two values for equality, similar to '===' but with special handling for NaN and -0.",
    wrongAnswer1: "To check if an object is an instance of a particular class.",
    wrongAnswer2: "To determine if an object has a specific property.",
    wrongAnswer3: "To create a shallow copy of an object.",
  },
  {
    question:
      "How does JavaScript handle asynchronous code execution, and what is the role of the event loop?",
    correctAnswer:
      "JavaScript uses an event-driven, non-blocking model. The event loop continuously checks the message queue and executes tasks.",
    wrongAnswer1:
      "JavaScript uses a synchronous model, and the event loop is not involved in code execution.",
    wrongAnswer2:
      "Asynchronous code is handled by multiple threads in JavaScript.",
    wrongAnswer3:
      "The event loop is only applicable to server-side JavaScript.",
  },
  {
    question:
      "What is the purpose of the 'FlatMap' function in JavaScript, and how does it differ from 'Map'?",
    correctAnswer:
      "'FlatMap' applies a function to each element of an array and flattens the result into a new array, while 'Map' only applies the function without flattening.",
    wrongAnswer1: "'FlatMap' is used for one-dimensional arrays only.",
    wrongAnswer2: "'Map' and 'FlatMap' have identical functionalities.",
    wrongAnswer3: "'FlatMap' is a deprecated feature in modern JavaScript.",
  },
  {
    question:
      "Explain the differences between 'Rest Parameters' and 'Arguments' object in JavaScript functions.",
    correctAnswer:
      "'Rest Parameters' are an array-like object holding all the passed arguments, while 'Arguments' is an array-like object representing the arguments passed to a function.",
    wrongAnswer1:
      "'Rest Parameters' and 'Arguments' are interchangeable terms.",
    wrongAnswer2: "'Arguments' object is used for asynchronous functions only.",
    wrongAnswer3: "'Rest Parameters' can only be used in arrow functions.",
  },
  {
    question: "What is 'Debouncing' in JavaScript, and how is it implemented?",
    correctAnswer:
      "Debouncing is a technique used to ensure that time-consuming tasks do not fire so often, making them execute only after a certain time has passed since the last invocation.",
    wrongAnswer1: "Debouncing is a way to handle mouse events in JavaScript.",
    wrongAnswer2: "Debouncing is only applicable to synchronous functions.",
    wrongAnswer3: "Debouncing is a deprecated feature in modern browsers.",
  },
  {
    question:
      "Explain the concept of 'Cross-Origin Resource Sharing' (CORS) in JavaScript, and how does it impact web applications?",
    correctAnswer:
      "CORS is a security feature that controls how web pages in one domain can request and consume resources from another domain.",
    wrongAnswer1: "CORS is only applicable to server-side JavaScript.",
    wrongAnswer2:
      "CORS allows any web page to access resources from any domain.",
    wrongAnswer3: "CORS has no impact on the security of web applications.",
  },
  {
    question:
      "What is 'Currying' in JavaScript, and how can it be implemented?",
    correctAnswer:
      "Currying is a technique where a function is transformed into a sequence of unary functions, each taking a single argument. It allows partial application of the function.",
    wrongAnswer1: "Currying is a way to combine multiple functions into one.",
    wrongAnswer2: "Currying is only applicable to arrow functions.",
    wrongAnswer3: "Currying is a deprecated feature in modern JavaScript.",
  },
  {
    question:
      "Explain the differences between 'Blob' and 'Buffer' objects in JavaScript.",
    correctAnswer:
      "'Blob' is used to represent raw data, while 'Buffer' is a Node.js feature for handling binary data directly.",
    wrongAnswer1: "'Buffer' is a built-in JavaScript object.",
    wrongAnswer2: "'Blob' is only applicable in server-side JavaScript.",
    wrongAnswer3: "'Blob' and 'Buffer' are interchangeable terms.",
  },
  {
    question:
      "What is the purpose of the 'Symbol' data type in JavaScript, and how can it be used to create unique object properties?",
    correctAnswer:
      "'Symbol' is a primitive data type used to create unique identifiers. It can be used as keys for object properties, ensuring their uniqueness.",
    wrongAnswer1: "'Symbol' is a built-in JavaScript class.",
    wrongAnswer2: "'Symbol' is only applicable to arrays.",
    wrongAnswer3: "'Symbol' is a deprecated feature in modern JavaScript.",
  },
  {
    question:
      "Explain the concept of 'Zombie Objects' in JavaScript, and how can they lead to memory leaks?",
    correctAnswer:
      "Zombie objects are objects that are still referenced even though they are no longer needed. They can lead to memory leaks if not properly dereferenced.",
    wrongAnswer1:
      "Zombie objects are a feature specific to asynchronous programming.",
    wrongAnswer2:
      "Zombie objects are automatically garbage collected in JavaScript.",
    wrongAnswer3:
      "Zombie objects are only applicable to server-side JavaScript.",
  },
  {
    question:
      "What is the purpose of the 'Reflect' object in JavaScript, and how is it different from the 'Object' object?",
    correctAnswer:
      "'Reflect' is a built-in object that provides methods for interceptable JavaScript operations. It allows the execution of operations in a way similar to the language itself.",
    wrongAnswer1: "'Reflect' is used for asynchronous programming.",
    wrongAnswer2: "'Reflect' is a deprecated feature in modern JavaScript.",
    wrongAnswer3: "'Object' and 'Reflect' have identical functionalities.",
  },
  {
    question:
      "Explain the differences between 'Map' and 'WeakMap' objects in JavaScript.",
    correctAnswer:
      "A 'Map' is a collection of key/value pairs with various data types allowed as keys, while a 'WeakMap' only allows object references as keys and does not prevent their garbage collection.",
    wrongAnswer1: "'Map' and 'WeakMap' are interchangeable terms.",
    wrongAnswer2: "'WeakMap' is a subtype of 'Map'.",
    wrongAnswer3: "'Map' is only applicable to primitive data types.",
  },
]
