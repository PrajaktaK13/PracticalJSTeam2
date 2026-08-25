// return keyword

function add(a, b) {
    return a + b;
    console.log("Hello");    // Never get executed as return means ends the function.
}
let result = add(10, 20);    // here function is returning the value of (a+b), 
                             //  i.e.(10+20) is stored in 'result'. 
console.log(result);          // o/p : 30

// Functions can return different data types

// 1. Number

function mul(a, b) {
    return a * b;
}
let resMul= mul(4,5);  
console.log(resMul);                           // o/p: 20

// 2. String

function getName() {
    return "Prajakta";
}
let rgetName= getName(); 
console.log(rgetName);                         // o/p: Prajakta

// 3. Boolean

function isAdult(age) {
    return age >= 18;
}
let rAdult= isAdult(27); 
console.log(rAdult);                             //o/p: true


// Function Without return: A function without an explicit 'return' returns 'undefined'.

function greet() {
    console.log("Hello");
}

let result1 = greet();

console.log(result1);   
/* o/p: 
Hello
undefined , Because the function doesn't return anything.
so JavaScript automatically returns: undefined
*/
