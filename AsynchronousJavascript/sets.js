// A Set is a collection that stores unique values.

// For example, with an array:
let numbers = [10, 20, 10, 30, 20, 40];
console.log(numbers); // [ 10, 20, 10, 30, 20, 40 ]- duplicates are allowed

// but with Set

let numbersSet = new Set([10, 20, 10, 30, 20, 40]);
console.log(numbersSet);  // Set(4) {10, 20, 30, 40}- duplicates 10 and 20 are removed.

// create Set

let fruits = new Set();
console.log(fruits);   // Set(0) {} - as its an empty set

fruits.add("Apple");
fruits.add("Banana");
fruits.add("Mango");

console.log(fruits);  // Set(3) { 'Apple', 'Banana', 'Mango' }
fruits.add("Apple");
console.log(fruits);  // Set(3) { 'Apple', 'Banana', 'Mango' }- it does not take 2nd apple.

// has(): check whether a value exists in Set.

let fruits1 = new Set(["Apple", "Banana", "Mango","apple"]);
console.log(fruits1);

console.log(fruits1.has("Apple"));   // true
console.log(fruits1.has("Orange"));  // false


let fruits10= new Set(["A","p","p","p","l","e"]);
console.log(fruits10);
// delete()- delete/remove value

let fruits2 = new Set(["Apple", "Banana", "Mango"]);

fruits2.delete("Banana");

console.log(fruits2);   // Set(2) { 'Apple', 'Mango' }- Banana deleted

// size(): returns size of the Set

let fruits3 = new Set(["Apple", "Banana", "Mango", "   ", "  "]);

console.log(fruits3.size);    // 4
console.log(fruits3);         // Set(4) { 'Apple', 'Banana', 'Mango', '  ' }

// Convert Arry to Set

let browsers = ["Chrome", "Firefox", "Chrome", "Edge", "Firefox"];

let uniqueBrowsers = new Set(browsers);

console.log(uniqueBrowsers);   // Set(3) { 'Chrome', 'Firefox', 'Edge' }

// clear()

let users = new Set(["Admin", "Tester", "Guest"]);
console.log(users);   // Set(3) { 'Admin', 'Tester', 'Guest' }

users.clear();

console.log(users);   // Set(0) {}

/* delete() vs clear()
users.delete("Admin");- Removes one specific value

users.clear();- Removes everything  */








