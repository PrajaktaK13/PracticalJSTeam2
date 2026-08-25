//Converting String to Number

let str1 = "100";

let num1 = Number(str1);

console.log(num1);                         // o/p: 100
console.log(typeof num1);                  // o/p : number

// Number() with decimal values

let str2 = "25.50";

let num2 = Number(str2);

console.log(num2);                          // o/p: 25.5

// Number() with invalid string

let str3 = "hello";

let num3 = Number(str3);

console.log(num3);                           // o/p: NaN
console.log(typeof num3);                    // number(strange but imp)

// Using parseInt()

let str4 = "100";

let num4 = parseInt(str4);

console.log(num4);                            // o/p: 100

// Using parseFloat()

let str5 = "25.75";
let numX= Number(str5);                       
console.log(numX);                            // o/p: 25.75
let numY= parseInt(str5);
console.log(numY);                            // o/p: 25(removes decimal part)
let num5 = parseFloat(str5);
console.log(num5);                            // o/p 25.75

// Converting String to Array
// split()
// ex:1
let str6 = "Hello";

let arr1 = str6.split("");

console.log(arr1);                             // o/p: [ 'H', 'e', 'l', 'l', 'o' ]

// array of words
//ex:2
let str7 = "I like JavaScript";
let arr2 = str7.split(" ");                     // split(" "): Split wherever there is a space.

console.log(arr2);                              // o/p: [ 'I', 'like', 'JavaScript' ]

//ex:3
let str8 = "Java,Python,JavaScript";

let arr3 = str8.split(",");                     // split(","): split wherever there is a comma.

console.log(arr3);                              // [ 'Java', 'Python', 'JavaScript' ]

// String + Number

let strA = "10";
let numA = 20;

console.log(strA + numA);                       
// o/p: 1020 : Because when + is used with a string, JavaScript performs string concatenation.

// Number + String

let numB = 20;
let strB = "10";

console.log(numB + strB);
// o/p: 2010- Because JavaScript converts the number to a string

// String - Number

let strC = "10";
let numC = 20;

console.log(strC - numC);
// o/p: -10 : Because - is not a string concatenation operator.

// String * Number

let strD = "10";
let numD = 20;

console.log(strD * numD);
// o/p: 200 because JavaScript converts: "10" → 10 and then 10*20= 200

// String/Number

let strE = "100";
let numE = 20;
console.log(numE / strE);

console.log(strE / numE);                     // o/p: 0.2(20/100)
// o/p: 5 beacuse JavaScript converts: "100" → 100 and then 100/20= 5

// force addition instead of concatenation

let a = "10";
let b = "20";
let result = Number(a) + Number(b);
console.log(result);                               // o/p: 30
