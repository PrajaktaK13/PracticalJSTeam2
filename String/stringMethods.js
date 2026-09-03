
// charAt()

let text1 = "JavaScript";

console.log(text1.charAt(0));                        // o/p: J
console.log(text1.charAt(4));                        // o/p: S

// charAt() and test[] both can access text
console.log(text1.charAt(2));                                      // o/p: v
console.log(text1[2]);                                             // o/p: v

// But there is a difference when the index doesn't exist:
console.log(text1.charAt(20));                        // o/p: "" (blank string)
console.log(text1[20]);                               // o/p: undefined


// charCodeAt() — get character's numeric code
let text2 = "JavaScript";
console.log(text2.charCodeAt(0));                     // o/p: 74(Unicode of J)


// toUpperCase()

let text3 = "JavaScript";

console.log(text3.toUpperCase());                     // o/p: JAVASCRIPT
console.log(text3);                                   // o/p: JavaScript(as string is immutable)

// toLowerCase()

let text4 = "JavaScript";

console.log(text4.toLowerCase());                      // o/p: javascript

// indexOf() — find first occurrence

let text5 = "JavaScript";

console.log(text5.indexOf("a"));                       // o/p : 1


// lastIndexOf() - find last occurrence
let text6 = "JavaScript";

console.log(text6.lastIndexOf("a"));                   // o/p: 3

// substring() — extract part of a string

let text7 = "JavaScript";

console.log(text7.substring(0, 4));                     // o/p: Java

// slice() — extract part of a string

let text8 = "JavaScript";

console.log(text8.slice(0, 4));                     // o/p: Java

// slice() supports negative indexes.
// slice swaps if start > end

let text = "JavaScript";

console.log(text.slice(6, 2));      // ""
console.log(text.substring(6, 2));  // vaSc-> it coverts slice(2,6)

let text9 = "JavaScript";

console.log(text9.slice(-6));                           // o/p: Script
console.log(text9.substring(-6));                       // o/p: JavaScript(wrong)

// substr() - extract part of a string with start index and length

let text10 = "JavaScript";

console.log(text10.substr(0, 4));                         // o/p: Java

// split()

let text11 = "Apple,Banana,Mango";

let fruits = text11.split(",");                   //o/p: [ 'Apple', 'Banana', 'Mango' ]

console.log(fruits);

// trim: removes spaces from both sides

let text12 = "   Hello World   ";

console.log(text12.trim());                      // o/p: Hello World(does not remove speces between words)

// trimStart() — remove beginning spaces

let text13 = "   Hello   ";

console.log(text13.trimStart());                  // o/p: Hello        (only beginning spece is removed)

// trimEnd() — remove ending spaces

let text14 = "   Hello   ";

console.log(text14.trimEnd());                     // o/p:     Hello(only ending space is removed)

//includes()- case sensetive

let text15 = "JavaScript is powerful";

console.log(text15.includes("Script"));            // o/p: true

// startsWith()

let text16 = "JavaScript";

console.log(text16.startsWith("Java"));             // o/p: true

// endsWith()

let fileName = "report.pdf";

console.log(fileName.endsWith(".pdf"));              // o/p: true

