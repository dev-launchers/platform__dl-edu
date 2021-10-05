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
<<<<<<< HEAD
codeSandboxSrc: 
'https://codesandbox.io/embed/gracious-bardeen-ist7m?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor'
},
{
id: 2, 
title: 'JS Datatypes',
markdown: `
=======
    embeddedIDEURL:
      "https://codesandbox.io/embed/gracious-bardeen-ist7m?fontsize=14&hidenavigation=1&theme=dark&view=editor",
    customIFrameStyle: { width: "100%", height: "100%", border: "none" }
  },
  {
    id: 2,
    title: "JS Datatypes",
    markdown: `
>>>>>>> main
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
`,
    embeddedIDEURL:
      "https://codesandbox.io/embed/red-https-knd21?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor",
    customIFrameStyle: null
  },
  {
    id: 6,
    title: "JS Math & Random",
    markdown: `
# Learning Module 6
`,
<<<<<<< HEAD
codeSandboxSrc: 'https://codesandbox.io/embed/red-https-knd21?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor'
}
]
=======
    embeddedIDEURL:
      "https://codesandbox.io/embed/red-https-knd21?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor",
    customIFrameStyle: null
  },
  {
    id: 7,
    title: "JS Functions",
    markdown: `
    # Learning Module 7
    `,
    embeddedIDEURL:
      "https://codesandbox.io/embed/red-https-knd21?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor",
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
];
>>>>>>> main

export default ModuleData;
