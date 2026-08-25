/* In JavaScript, functions are first-class objects/values.

This means a function can be:

- stored in a variable
- passed as an argument
- returned from another function*/

// Instead of writting function like:
function add(a, b) {
    return a + b;
}

// We can write like:
let add = function(a, b) {                // function expression.
    return a + b;
};

// Here, the function itself is treated like a value and stored inside the variable 'add'.
// We can call this function in the same way.

let add = function(a, b) {               // This function is also called anonymous function.
    return a + b;
};
console.log(add(10, 20));      //o/p: 30
// Here: add(10, 20) means: Execute the function stored inside add.


// Use of Function expression

let operation = function(a, b) {
    return a + b;
};

console.log(operation(10, 20)); // o/p: 30

// Later, we can change what 'operation' contains:

operation = function(a, b) {
    return a * b;
};

console.log(operation(10, 20));  // o/p: 200

// Arrow Functions

// Normal function expression:
let add = function(a, b) {
    return a + b;
};
console.log(add(10, 20)); 

// Arrow function be like:
let add = (a, b) => {
    return a + b;
};
console.log(add(10, 20)); 

// Shorter Arrow Function:
// If the function contains only one statement that returns a value, we can make it even shorter.
// Instead of 
let add = (a, b) => {
    return a + b;                       
};
console.log(add(10, 20));               // o/p 30

// We can write
let add = (a, b) => a + b; 
console.log(add(10, 20));               // o/p 30(no need to write return here as no {} here)



// Arrow Function with One Parameter
let square = num => num * num;        
console.log(square(10));                 // o/p: 100

// Arrow function with no parameter
let greet = () => {
    console.log("Hello");
};
greet();                                 // o/p Hello


// Summary

function add(a, b) {
    return a + b;                   // normal fnction
}
let add = function(a, b) {          // function expression/anonymous function
    return a + b;
};
let add = (a, b) => {
    return a + b;                   // arrow function                     
};
let add = (a, b) => a + b;          // one statement arrow function
let square1 = num => num * num;     // Arrow Function with One Parameter
let greet1 = () => {
    console.log("Hello");           // Arrow function with no parameter
};
let greet2 = () => console.log("Hello");  // one statement arrow function with no parameter



