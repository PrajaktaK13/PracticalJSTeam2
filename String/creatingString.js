// A string is a sequence of characters/text.
// Ex: 

let fname = "Prajakta";                          // using double quotes (preferable)
let country = 'India';                           // using single quotes
let message = `Hello World`;                     // using backticks

console.log(typeof fname);                       // string
console.log(typeof country);                     // string 
console.log(typeof message);                     // string

// String is a sequence of characters

let languageName = "JavaScript";

/* Each character has an index.
Character:  J  a  v  a  S  c  r  i  p  t
Index:      0  1  2  3  4  5  6  7  8  9  */


// Accessing characters of string

let lname = "JavaScript";

console.log(lname[0]);                                    // o/p: J 


// String length

let laName = "JavaScript";

console.log(laName.length);                               // o/p: 10 (numbers of characters)  


//escepe character
//  \n: new line

console.log("Hello\nWorld");                              // o/p: Hello
                                                          //      World      
                                                        
//  \t: tab
console.log("Hello\tWorld");                               // o/p: Hello  World

//  \' single quote
let text1 = 'I don\'t know';

console.log(text1);                                         // o/p: I don't know

//  \" double quote

let text2 = "She said \"Hello\"";

console.log(text2);                                         // She said "Hello"

//   \\ backslash

console.log("C:\\Users\\Prajakta");                        // o/p: C:\Users\Prajakta