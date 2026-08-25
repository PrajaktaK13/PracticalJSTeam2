// Ex1:
let numbers1 = [10, 20, 30];

numbers1.push(40);

console.log(numbers1);                     // o/p: [10, 20, 30, 40]

// Ex2:

let numbers2 = [10, 20, 30];

let result = numbers2.pop();

console.log(result);                        // o/p: 30 
console.log(numbers2);                      // o/p: [10, 20]

// Ex:3

let numbers = [20, 30];

numbers.unshift(10);
numbers.push(40);

console.log(numbers);                        // o/p: [ 10, 20, 30, 40 ]

// Ex:4

let fruits = ["Banana", "Mango"];

fruits.unshift("Apple");                       // ['Apple','Banana', 'Mango' ]
fruits.pop();                                  // ['Apple', 'Banana']
fruits.push("Orange");                         // ['Apple', 'Banana','Orange']
fruits.shift();                                // ['Banana', 'Orange']

console.log(fruits);                           // o/p: [ 'Banana', 'Orange']


// Ex5: Reverse an array manually


let numbers3 = [10, 20, 30, 40, 50];
//let reverseNumbers = new Array(5);
let reverseNumbers = [];
console.log(reverseNumbers.length);

for (num of numbers3) {
     
     //reverseNumbers[i]=numbers3.pop();     
     reverseNumbers.push(numbers3.pop());
}
console.log(reverseNumbers);                 // o/p: [50, 40, 30, 20, 10]

// Ex:6 Search for an element

let numbers4 = [10, 20, 30, 40, 50];
for (let i= 0; i<numbers4.length; i++) {
     if(numbers4[i] === 30){
          console.log(`Number found at index ${i}`); //o/p: Number found at index 2.
     }
     
}

// Ex :7 Largest number

let largestnum;
l//let arr1 = [10, 73, 60, 89, 50];
largestnum = arr1[0];
for(let i= 0; i<arr1.length; i++){
     if(arr1[i] > largestnum){
         largestnum = arr1[i]; 
     } 
}
console.log("Largest Number is ",largestnum);        // o/p : Largest number is 89


// Ex:8 Second largest number

let arr1 = [1002, 928, 2003, 504, 834, 5004, 201, 308];
let largest = arr1[0];
let secondLargest= arr1[1]; 

for(let i= 0; i<arr1.length; i++){
     if(arr1[i] > largest){
         secondLargest = largest;
         largest = arr1[i];                 
        
     } else if(arr1[i] > secondLargest && arr1[i]!= largest){
          secondLargest=arr1[i];
     }     
}
console.log(`Largest number is ${largest} and Second largest number is ${secondLargest}`);
//o/p:  Largest number is 5004 and Second largest number is 2003.


// Ex: 9 passing array to the function 

function arrFun (arrX){
     console.log(arrX);
}
arrFun([1,2,3,4]);                        // o/p: [1, 2, 3, 4]
let numbersX= [10, 20, 30, 40,]
arrFun(numbersX);                         // o/p: [10, 20, 30, 40]

// Passing an array and using a loop to print it.

function printNumbers(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

}

let numbersY = [10, 20, 30, 40];

printNumbers(numbersY);                       
/* o/p:

10
20
30
40   */

     


