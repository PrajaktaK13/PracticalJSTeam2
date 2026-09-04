/*
Synchronous:
Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.

Asynchronous:
Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions
immediately and doesn't block the flow. 
*/


// CallBack function: A function that we give to another function, so that the other function can call it later.
// Callback function = A function passed as an argument to another function and executed by that function.

// Ex:1

function foodReady() {
    console.log("Food is ready!");
}

function foodNotReady(){
    console.log("Food is not ready!");
}
function orderFood(callback) {                // callback is a parameter.

    console.log("Food is being prepared...");

    // Later, call the callback
    callback();
}
orderFood(foodNotReady); 
orderFood(foodReady);   
     
/* o/p:
Food is being prepared...
Food is not ready!
Food is being prepared...
Food is ready!
 */

// Ex2:

function sayHello() {
    console.log("Hello Prajakta");
}
function executeFunction() {

    console.log("Executing function...");
    
}
executeFunction(sayHello());

/* o/p: 
Hello Prajakta 
Executing function...     */

// Callback with a parameter 
//  Ex1

function showResult(result) {
    console.log("Result is:", result);
}

function calculate(callback) {

    let a = 10;
    let b = 20;

    let result = a + b; 
    callback(result);
} 
calculate(showResult);  // Result is: 30

// Ex2:

function giveResult(result) {
    console.log("File checking result:", result);
}

function checkFile(callback) {

    console.log("Checking file...");

    let result = "File is valid";

    callback(result);
}

checkFile(giveResult);
/* o/p: Checking file...
File checking result: File is valid  */

// Diffrent case:

function greet() {
    console.log("Hello");
    //return test;
}
// function test() {
//     console.log("Hello");
// }
function process(callback) {
    console.log("Processing");
    callback();
}

process(greet());          
/* o/p:
Hello
Processing
TypeError

Explanation:
process(greet()); - That means execute greet() immediately.
greet(): o/p- Hello
But greet() doesn't return anything, so its return value is: undefined
so process(undefined); -> callback();-> undefined();-> TypeError        */


// Anonymous Callback Function

// Instead of this:

function display(name) {
    console.log("Hello", name);
}

function process(callback) {
    console.log("Processing...");
    callback("Prajakta");
}

process(display);

// we can write:

function process(callback) {
    console.log("Processing...");
    callback("Prajakta");
}

process(function(name) {
    console.log("Hello", name);
});

/* o/p:
Processing...
Hello Prajakta  */

// here in the place of:
function display(name) {
    console.log("Hello", name);
}
process(display);
// we have written
process(function(name) {
    console.log("Hello", name);
});

// Arrow function
// above function can be wrtie
 
function process(callback) {
    console.log("Processing...");
    callback("Prajakta");
}
process((name) => {
    console.log("Hello", name);
});
/* o/p: Processing...
Hello Prajakta   */


// setTimeout function used to delay the execution.
function Task(){
    console.log("Task completed");
}
setTimeout(Task,3000); // output get printed after 3 sec(3000 ms)
// o/p: Task completed 

// can be write as arrow function
 setTimeout(() => {
    console.log("Task completed");
},3000);

// setInterval: callBacks runs repeatedly.

// let intervalId = setInterval(() => {
//     console.log("Task running..."); 
// }, 2000);
// clearInterval(intervalId);
/* O/p: 
Task running...
Task running...
Task running...
Task running...
...                (with time interval of 2 sec) */




// Callback Hell: Callback Hell is a situation where multiple callbacks
// are nested inside one another, making the code difficult to read and maintain.

function login(callback) {
    console.log("Login completed");
    callback();
}

function getUser(callback) {
    console.log("User details fetched");
    callback();
}

function getOrders(callback) {
    console.log("Orders fetched");
    callback();
}

function getPayment(callback) {
    console.log("Payment completed");
    callback();
}

login(() => {
    getUser(() => {
        getOrders(() => {
            getPayment(() => {
                console.log("Done");
            });
        });
    });
});

// With promise we can wite with much easy and cleaner way like:

login()
    .then(getUser)
    .then(getOrders)
    .then(getPayment)
    .then(() => {
        console.log("Done");
    });