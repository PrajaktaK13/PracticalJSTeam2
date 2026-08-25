// ===: We can compare two strings using the strict equality operator ===.

let str1 = "Hello";
let str2 = "Hello";
let str3 = "hello";

console.log(str1 === str2);             // o/p: true(Because both strings contain exactly the same characters.)
console.log(str1 === str3);             // o/p: false

// localeCompare() is another way to compare strings.

let str4 = "apple";
let str5 = "apple";
let str6 = "banana";

console.log(str4.localeCompare(str5));   // o/p: 0 as both strings are equal
console.log(str4.localeCompare(str6));   // o/p: -1 as first string comes first(alphabetically)
console.log(str6.localeCompare(str4))    // o/p: 1 as first string comes second.


// Case-Insensitive Comparison

let str7 = "HELLO";
let str8 = "hello";

console.log(str7 === str8);                               // o/p: false
// We can convert both strings to lowercase first.
console.log(str7.toLowerCase() === str8.toLowerCase());   // o/p: true
//Or we can convert both strings to uppercase first.
console.log(str7.toUpperCase() === str8.toUpperCase());   // o/p: true

console.log("Hello".localeCompare("hello"));              //o/p: 1

// localeCompare() with case-insensitive option

let str9 = "Hello";
let str10 = "hello";

console.log(str9.localeCompare(str10, undefined, { sensitivity: "base" }));   // o/p: 0


// replace() replaces part of a string with another value.
// replace() replaces only the first matching occurrence

let text1 = "I like Java";

let result = text1.replace("Java", "JavaScript");

console.log(result);                                  // o/p: I like JavaScript

// replaceall() replaces all matching occurrence

let text = "apple apple apple";

console.log(text.replaceAll("apple", "mango"));       // o/p: mango mango mango


// Concatenating Strings
// Using +
let firstName = "Sharvil";
let lastName = "Patil";

let fullName = firstName + " " + lastName;

console.log(fullName);                        // o/p: Sharvil Patil

// We can also use +=.
let message = "Hello";

message += " Prajakta";

console.log(message);                          // Hello Prajakta

// Modifying Strings

/* Strings are immutable in JavaScript.
That means we cannot directly change an individual character of a string.*/

let str = "Hello";
str[0] = "Y";
console.log(str);                            // o/p: Hello

str = "Y" + str.slice(1);
console.log(str);                            //o/p : Yello

/* Following methods returns new string:
replace()
slice()
substring()
trim()
toUpperCase()
toLowerCase()   */
