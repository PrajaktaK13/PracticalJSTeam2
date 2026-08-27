// A function is a reusable block of code that performs a specific task.

// Without function

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

// With function

function sayHello() {
    console.log("Hello");
}
// can be call as:
sayHello();          // Hello
sayHello();          // Hello
sayHello();          // Hello

// when we call the function in the program, after function get executed, the remaing program get continued.
// example:

function greet() {
    console.log("Hello");
} 
console.log("Start");
greet();
console.log("End");

function test() {
    var a = 10;
}
console.log(a);                    // ReferenceError

/*output
Start
Hello
End*/

/* why we use functions:
1. Reusability
2. Avoid duplicate code
3. Easier maintenance
4. Makes code easier to understand
*/

