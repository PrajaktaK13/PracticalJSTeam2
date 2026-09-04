//What is an error?
//-> An error is a problem that occurs while JavaScript is executing your code.

// Ex:
console.log(fname);             // ReferenceError: fname is not defined

let num = 10;
console.log(num.toUpperCase()); // TypeError because toUpperCase() is a string method, but num is a number.

// Why do we need Error Handling?

console.log("Step 1");

console.log(username);

console.log("Step 3");
/* O/P:
Step 1
Error
Step 3 → doesn't execute */

// Error handling allows us to handle the error instead of letting it unexpectedly stop the program.

// try catch : The most important error-handling mechanism

try {
    console.log(lname);
}
catch (error) {
    console.log("An error occurred");
}


// o/p: An error occurred
// as name does not exist so JS moves to Catch

/* catch (error): error is a variable containing information about the error.*/
// We can do:

try {
    console.log(fname);
}
catch (error) {
    console.log(error);                // ReferenceError: fname is not defined
}
// or
try {
    console.log(fname);
}
catch (error) {
     console.log(error.name);           // ReferenceError
     console.log(error.message);        // fname is not defined  
     
}

// Practice Q1:

try {
    console.log("Hello");
    console.log(fname);
    console.log("World");
}
catch (error) {
    console.log("Error occurred");
}


// O/p: Hello
//      Error ocurred


// Finally block

try {
    console.log("Try");
}
catch (error) {
    console.log("Catch");
}
finally {
    console.log("Finally");
}
/* o/p:
Try
Finally */



// throw: throw is used when you want to intentionally create an error in JavaScript.
// The statements after throw will not be executed.
// Ex1:

let age = 15;

if (age < 18) {
    throw new Error("Age must be 18 or above");
    console.log("Hello");                         // not executed
}
// o/p: Error: Age must be 18 or above


// Ex2:
console.log("Start");

//throw new Error("Something went wrong");
console.log("End");                          // not executed

/* o/p: 
Start
Error: Something went wrong 

Start -> throw executes -> Error -> End is NOT executed */

// throw with try catch

try {
    let age = 25;

    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }

    console.log("Allowed");
}
catch (error) {
    console.log(error.message);
}

// o/p: Age must be 18 or above
   
try {
    let age = 25;

    if (age < 18) {
        throw new Error("Not eligible");
    }

    console.log("Eligible");
}
catch (error) {
    console.log(error.message);
}

console.log("Done");

/* o/p:  Not eligible
         Done               */


   // throw with functions
// Ex1:
   function checkAge(age) {

    if (age < 18) {
        throw new Error("Not eligible");
    }

    return "Eligible";
}

// Ex2:
try {
    let result = checkAge(15);
    console.log(result);                // Not Eligible
}
catch (error) {
    console.log(error.message);
}

// Ex3:

function divide(a, b) {

    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

try {
    let result = divide(10, 0);
    console.log(result);
}
catch (error) {
    console.log(error.message);
}

console.log("Test completed");
/* Cannot divide by zero
   Test completed            */


// why we write finally

function test() {

    try {
        console.log("Try");
        return;
    }
    catch (error) {
        console.log("Catch");         
    }
    finally{
        console.log("Finally");
    }        
    
}
test();

/* Try
Finally
Even though return was executed, finally still ran before the function actually returned. */
