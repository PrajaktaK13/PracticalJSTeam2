
// Declaring function

function greet(name) {              // name is called 'Parameter'
    console.log("Hello " + name);
}
// calling function
greet("Prajakta");           // o/p: Hello Prajakta   Here 'Prajakta' is Argument.
greet("Rahul");              // o/p: Hello Rahul
greet("Amit");               // o/p: Hello Amit


// Parameter → variable in function definition
// Argument → actual value passed during function call

// Multiple parameters
function add(a, b) {         // Passing 2 parameters, a and b.
    console.log(a + b);
}
add(10, 20);    // o/p: 30 (10+20)


// Function with Default Parameters

function greet(name = "Guest") {
    console.log("Hello " + name);
}
greet("Prajakta");                    // o/p: Hello Prajakta
greet();                              // o/p: Hello Guest


// Function with different Data Types

// String datatype

function greet(name) {
    console.log("Hello " + name);
}

greet("Prajakta");                            // o/p: Hello Prajakta

//Number datatype

function square(num) {
    return num * num;
}

console.log(square(5));                       // o/p: 25

// Boolean datatype

function checkLogin(isLoggedIn) {
    if (isLoggedIn) {
        console.log("Welcome");
    } else {
        console.log("Please login");
    }
}
checkLogin(true);                              //o/p: Welcome



