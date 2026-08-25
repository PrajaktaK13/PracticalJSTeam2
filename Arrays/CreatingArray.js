//An array is a collection of multiple values stored in a single variable.

// Without an Array:
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Mango";

// With an Array:
let fruits = ["Apple", "Banana", "Mango"];
// all three values are stored inside fruits.


// Creating an array:

//We can create array like:
let fruitsA = ["Apple", "Banana", "Mango"];
// Or like:
let fruitsB = new Array("Apple", "Banana", "Mango");
//or like:
let fruitsX = [];
console.log(fruitsX.length);



// Array Index:

// JavaScript arrays use zero-based indexing.
// That means the first element is at index 0.

let fruitsC = ["Apple", "Banana", "Mango"];
console.log(fruitsC[0]);                    // o/p: Apple
console.log(fruitsC[1]);                    // o/p: Banana
console.log(fruitsC[2]);                    // o/p: Mango



// Getting the length of the array

let fruitsD = ["Apple", "Banana", "Mango"];
console.log(fruitsD.length);                   // o/p: 3 

// Checking Whether Something Is an Array:

let fruitsE = ["Apple", "Banana"];

console.log(Array.isArray(fruitsE));           //o/p: true, Array.isArray() returns boolean value.



// User Input Array:

// Normal Array is:
let numbers = [10, 20, 30, 40];    // The values are already written in the program.
 
// User input array is:
// Suppose we want the user to enter 3 numbers:

let numbers1 = [];

numbers1.push(prompt("Enter first number"));
numbers1.push(prompt("Enter second number"));
numbers1.push(prompt("Enter third number"));

console.log(numbers1);

// If the user enters:
//10
//20
//30
// o/p Array becomes: [10, 20, 30]

// User input array with loop:
// let numbers2 = [];

// for (let i = 0; i < 3; i++) {
//     let num = prompt("Enter a number");
//     numbers2.push(num);
// }
// console.log(numbers2);
/* If the user enters:
5
10
15
O/p: [5, 10, 15] */
