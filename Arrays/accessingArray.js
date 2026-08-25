
// Accessing an array means getting/read­ing a particular element from the array.

// Accessing first element:
console.log(fruits[0]);

// Accessing the last element:

let fruits1 = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits1[fruits1.length - 1]);             //o/p: Orange
console.log(fruits1.at(-1));                          //o/p: Orange(we can use at(-1)) also for last element


// Accessing arrays element using loop.

let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
/* Output:
Apple
Banana
Mango */

// If the index doesn't exist

let fruits2 = ["Apple", "Banana", "Mango"];

console.log(fruits2[5]);                                // o/p: undefined


