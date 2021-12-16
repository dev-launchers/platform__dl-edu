const ModuleData = [
  {
    id: 1,
    title: "JS Variables",
    markdown: `# Variables

Var:

- Used before ES6 came out in 2020
- Used to declare variables
- var variables can be updated and re-declared

Scope of var:

- Scope means where a variable can be used
- var declarations can be either globally scoped or function/locally scoped
- var is globally scoped when it is declared outside a function, which means that specific variable is relevant throughout the whole window
- var is functionally/locally scoped when it is declared inside a function

Hoisting of var:

- Hoisting means the variables and function declarations are moved to the top of their scope before code execution.
- Therefore var variables are hoisted to the top of top of their scope and initialized as undefined

Problem with var:

- Var can be changed without any consequence, which may cause confusion if you have already declared a variable before and weren't expecting an output using another declaration of var

Var Practice Example:

Student: 

- Declares Variable
- Calls the variable
- Change the variable below it and call it again to see the result

\`\`\`
var x = "pie"

console.log(x)

x = 3

console.log(x)

\`\`\`

Let:

- Let is the preferred variable declaration now that ES6 has come out.
- Can be defined in different scopes
- A variable cannot be declared more than once within the same scope, solving the problem of var

Scope of Let:

- Let is block scoped
- A block is a chunk of code bounded by curly braces.
- A variable declared in a block with let can only be referenced inside that block

Updating and re-declaring let:

- a variable that has been declared with let can be updated within its scope, but a let variable cannot be re-declared within its scope whereas a var variable can

Hoisting of let:

- let variables are also hoisted to the top like var variables except they are not initialized with a value of undefined, therefore if you try to use a let variable before declaration a reference error will pop up

Student:

- Declares variable with let
- 

Const:

- const variables have constant values, meaning they cannot be changed.

Scope of const:

- const declarations are block scoped

Updating and re-declaring const:

- const cannot be updated or re-declared

Hoisting of const:

- Similar to let variables, const variables are hoisted to the top but aren't initialized

Final differences:

- var is globally and function scoped whereas let and const are block scoped
- var can be updated and re-declared, let can be updated but not re-declared, and const cannot do either
- All are hoisted to the top of their scope, but var is initialized as a value of undefined while let and const are not initialized

## Some other tests
This is a test of a gif

![](https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif)

This is the test of a block quote
> cool (dev) beans
`,
embeddedIDEURL: 
'https://codesandbox.io/embed/gracious-bardeen-ist7m?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor',
customIFrameStyle: null
},
{
id: 2, 
title: 'JS Datatypes',
markdown: `
# Learning Module 2
`,
    embeddedIDEURL:
      "https://codesandbox.io/embed/red-https-knd21?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor",
    customIFrameStyle: null
  },
  {
    id: 3,
    title: "JS Strings",
    markdown: `
# Learning Module 3
`,
    embeddedIDEURL:
      "https://codesandbox.io/embed/red-https-knd21?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor",
    customIFrameStyle: null
  },
  {
    id: 4,
    title: "JS Comments",
    markdown: `
# Learning Module 4
`,
    embeddedIDEURL:
      "https://codesandbox.io/embed/red-https-knd21?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor",
    customIFrameStyle: null
  },
  {
    id: 5,
    title: "JS Operators",
    markdown: `
# Learning Module 5
Operators:

Arithmetic Operators:

- Arithmetic Operators perform mathematical functions
- + : Addition(adds two values together)
- - : Subtractions(subtracts two values)
- * : Multiplication(multiplies two values)
- / : Division(divides two values)
- % : Modulus(divides two values and returns the remainder)
- ++ : Increment(adds one to a value)
- — : Decrement(subtracts one from a value)

Assignment Operators:

- Assignment Operators assign values to a variable
- = : Equals(assigns a value to a variable)
- += : Plus Equals(adds a value to a variable)
- -= : Minus Equals(subtracts a value from a variable)
- *= : Times Equals(multiplies a variable by a value)
- /= : Divides Equals(divides a variable by a value
- %= : Modulus equals(modulus' a variable by a value)

Logical Operators:

- Returns a value based on the condition imposed by the operator
- && : And Operator(performs expression only if both conditions are true)

Ex:

\`\`\`
let x = 5
let y = 3

// returns true
if(x < 7 && y > 1)
	return true
\`\`\`

- || : Or Operator(performs expression if either of the conditions are true)

Ex:

\`\`\`
let x = 9
let y = 7

// returns true
if(x < 7 || y > 5)
return true
\`\`\`

- ! : Returns the opposite boolean value

\`\`\`
let x = true
let y = !x

// logs out false
console.log(y)

\`\`\`

Comparison Operators:

- The comparison operators compare two values
- == : Equals Equals Operator(checks to see if two values are the same)
- ! = : Does Not Equals Operator(checks to see if two values are not the same)
- ===: Equals Equals Equals Operator(checks to see if two values are the same and have the same data type)
- ! ==:  Does Not Equals Equals Operator(checks to see if two values are the same and do not have the same data type)
- < : Less than Operator( Performs the less than function)
- > : Greater than Operator(Performs greater than function)
- < = : Less than or equal to Operator( Checks to see if a value is less than or equal to another)
- >=: Greater than or equal to Operator(Checks to see if a value is greater than or equal to another)
`,
    embeddedIDEURL:
      "https://codesandbox.io/embed/solitary-framework-vnpzw?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor",
    customIFrameStyle: null
  },
  {
    id: 6,
    title: "JS Math & Random",
    markdown: `
# Learning Module 6
`,
    embeddedIDEURL:
      "https://codesandbox.io/embed/red-https-knd21?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor",
    customIFrameStyle: null
  },
  {
    id: 7,
    title: "JS Functions",
    markdown: `
# Learning Module 7

Function:

- A function is a block of code used to execute a certain task when called upon
- A function argument/parameter is a value local to the function
- We use functions because they allow us to execute a certain block of code as many times as we want, reducing the amount of code needed

Syntax:

- A JS function is defined using the function keyword that is followed by a keyword and parentheses.
- Parameters may be put inside the parentheses

    \`\`\`
    function functionName(parameter1, parameter2) {
    	//code
    }
    \`\`\`

Function Calling:

- In order to call a function you write the name of the function with parentheses

  \`\`\`
  //Calls the result of functionName
  functionName()
  \`\`\`

Parameters:

- Parameters are the names of arguments that are passed through a function
- They are used to execute a certain task while still being able to change the value they hold when called

    \`\`\`
    //Has the parameters a and b
    function addition(a, b) {
    	let sum = a + b;
    	console.log(sum)
    }
    //Logs out 8
    addition(3, 5)
    \`\`\`

Recursive Functions:
-  Recursive Functions are functions that call themselves within themselves
-  They typically involve an if statement to initiate a loop and a base case in order to stop the loop
-  Recursion is used to break down bigger problems into smaller pieces

Calling a function within another function:
-  Funcitons are also able to call different functions inside of themselves
-  This allows for neater and more efficient code

Assigning values to variables within a function:
-  Assigning values to variables through the parameter of a function is useful for 
when you need the value of a variable to change frequently
    `,
    embeddedIDEURL:
      "https://codesandbox.io/embed/zealous-poitras-vflt7?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor",
    customIFrameStyle: null
  },
  {
    id: 8,
    title: "Java Introduction",
    markdown: `
    # Introduction to Java
    `,
    embeddedIDEURL:
      "https://replit.com/@jdaus/Java-Demo?lite=true",
    customIFrameStyle: null
  },
  {
    id: 9,
    title: "C# Introduction",
    markdown: `
    # Introduction to C#
    `,
    embeddedIDEURL:
      "https://replit.com/@jdaus/HurtfulSpectacularGnuassembler?lite=true",
    customIFrameStyle: null
  },
  {
    id: 10,
    title: "TODO",
    markdown: `
    # TODO
    `,
    embeddedIDEURL:
      "https://replit.com/@jdaus/HurtfulSpectacularGnuassembler?lite=true",
    customIFrameStyle: null
  },
  {
    id: 11,
    title: "TODO",
    markdown: `
    # TODO
    `,
    embeddedIDEURL:
      "https://replit.com/@jdaus/HurtfulSpectacularGnuassembler?lite=true",
    customIFrameStyle: null
  },
  {
    id: 12,
    title: "TODO",
    markdown: `
    # TODO
    `,
    embeddedIDEURL:
      "https://replit.com/@jdaus/HurtfulSpectacularGnuassembler?lite=true",
    customIFrameStyle: null
  },
  {
    id: 13,
    title: "TODO",
    markdown: `
    # TODO
    `,
    embeddedIDEURL:
      "https://replit.com/@jdaus/HurtfulSpectacularGnuassembler?lite=true",
    customIFrameStyle: null
  },
  {
    id: 14,
    title: "TODO",
    markdown: `
    # TODO
    `,
    embeddedIDEURL:
      "https://replit.com/@jdaus/HurtfulSpectacularGnuassembler?lite=true",
    customIFrameStyle: null
  }
];

export default ModuleData;
