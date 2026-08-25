

// push() adds one or more elements to the end of an array.

//Add 1 element at end
let fruitsA = ["Apple", "Banana"];

let pushResult = fruitsA.push("Mango");

console.log(fruitsA);                                          //o/p: ['Apple', 'Banana', 'Mango']
console.log("New array length after push is",pushResult);      // o/p: New array length is 3, push returns new array length.               

//Add multiple elements

let fruitsB = ["Apple", "Banana"];

fruitsB.push("Mango", "Orange");                        
console.log(fruitsB);                                   // o/p: [ 'Apple', 'Banana', 'Mango', 'Orange' ]
               


// pop() removes the last element.

let fruitsC = ["Apple", "Banana", "Mango"];

let removedFruit= fruitsC.pop();

console.log(fruitsC);                                                      // o/p: [ 'Apple', 'Banana' ]

console.log("Removed fruit after pop is", removedFruit);                  // o/p Mango, as pop returns removed element.


// unshift() adds one or more elements to the beginning of an array.

let fruitsD = ["Banana", "Mango"];

let unshiftResult = fruitsD.unshift("Apple");

console.log(fruitsD);                                                 // o/p: [ 'Apple', 'Banana', 'Mango' ]
console.log("New array length after unshift is",unshiftResult);       // o/p: New array length is 3


// shift() removes one or more elements from beginning.

let fruitsE = ["Apple", "Banana", "Mango"];

let removeFrute= fruitsE.shift();

console.log(fruitsE);                                      // o/p : [ 'Banana', 'Mango' ]
console.log("Removed fruit after shift is", removeFrute);  // o/p : Removed fruit after shift is Apple

//reverse, join, split and other methods

// reverse()
// reverse() reverses the order of elements in an array.

let numbers1 = [10, 20, 30, 40];

numbers1.reverse();

console.log(numbers1);                        // o/p: [40, 30. 20, 10]
                                              // it changes the original array

// join()

// join() converts an array into a string.

let fruitsF = ["Apple", "Mango", "Banana"];
let result1 = fruitsF.join();

console.log(result1);                          // o/p : Apple,Mango,Banana
let result2 = fruitsF.join("-");
console.log(result2);                          // o/p: Apple-Mango-Banana


// split() 
// Now split() is basically the opposite of join().
// split() converts a string into an array.

let text = "Apple-Mango-Banana";

let fruitsG = text.split("-");

console.log(fruitsG);                         // o/p: [ 'Apple', 'Mango', 'Banana' ]


// includes(): (case sensative)

let browsers1 = ["Chrome", "Firefox", "Edge", "Chrome"];

console.log(browsers1.includes("Chrome"));        // o/p: true
console.log(browsers1.includes("chrome"));        // o/p: false



// indexOf()

console.log(browsers1.indexOf("Chrome"));                      // o/p: 0 (array index of the element)
console.log(browsers1.indexOf("Safari"));                      // o/p: -1




// slice() is used to extract a portion of an array.
// slice() does NOT change the original array.

let browsers2 = ["Chrome", "Firefox", "Edge", "Safari", "Opera"];

let result3 = browsers2.slice(1, 4);
let result4 = browsers2.slice(2);

console.log(result3);                        // o/p: [ 'Firefox', 'Edge', 'Safari' ]
console.log(browsers2);                      // o/p: [ 'Chrome', 'Firefox', 'Edge', 'Safari', 'Opera' ]
console.log(result4);                        // o/p: [ 'Edge', 'Safari', 'Opera' ]



/* splice()
splice() can:
Remove elements
Add elements
Replace elements

And most importantly:

splice() changes the original array. */

// Remove elements

let browsers3 = ["Chrome", "Firefox", "Edge", "Safari"];

browsers3.splice(1, 2);

console.log(browsers3);              
/* o/p: [ 'Chrome', 'Safari' ]:
splice(1, 2): start from index 1 and delete 2 elements including 1 index. */

// Add elements:

let browsers4 = ["Chrome", "Firefox", "Safari"];

browsers4.splice(2, 0, "Edge");

console.log(browsers4);
/* 2  o/p: [ 'Chrome', 'Firefox', 'Edge', 'Safari' ]
     2   → start at index 2
     0   → remove 0 elements
   "Edge"  → add Edge */

// Replace elements

let browsers5 = ["Chrome", "Firefox", "Edge"];

browsers5.splice(1, 1, "Safari");

console.log(browsers5);

/* o/p: [ 'Chrome', 'Safari', 'Edge' ]

splice(1, 1, "Safari")
       ↑  ↑     ↑
       |  |     |
       |  |     new value
       |  |
       |  remove 1
       |
       start index   */
