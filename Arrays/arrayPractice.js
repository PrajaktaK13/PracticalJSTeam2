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
        
     } else if(arr1[i] > secondLargest){
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

// Find the second smallest number without using sort().

let arr2 = [1002, 928, 2003, 504, 834, 5004, 201, 308];
let smallest = arr2[0];
let secondSmallest= arr2[1]; 

for(let i= 0; i<arr2.length; i++){
     if(arr2[i] < smallest){
         secondSmallest = smallest;
         smallest = arr2[i];                 
        
     } else if(arr2[i] < secondSmallest){
          secondSmallest=arr2[i];
     }     
}
console.log(`Smallest number is ${smallest} and Second smallest number is ${secondSmallest}`);

// third larest

let arr3 = [1002, 928, 2003, 504, 834, 5004, 201, 308];
let large = arr3[0];
let secondLarge= arr3[1]; 
let thirdLarge= arr3[2];

for(let i= 0; i<arr3.length; i++){
     if(arr3[i] > large){  
         thirdLarge=secondLarge;       
         secondLarge = large;
         large = arr3[i];                 
        
     } else if(arr3[i] > secondLarge && secondLarge!=large){
          thirdLarge=secondLarge;
          secondLarge=arr3[i];

     }else if(arr3[i] > thirdLarge){
          thirdLarge=arr3[i];
     }   
}
console.log(`Largest number is ${large} and Second largest number is ${secondLarge} third laregest number is ${thirdLarge}`);

     
// second laregst with duplicate values

let arr4 = [50, 20, 100, 80, 30, 80, 70, 80, 60];
let large1 = arr4[0];
let secondLarge1= arr4[1]; 
let thidLarge1= arr4[2];

for(let i=0; i<arr4.length; i++){
     
          if(arr4[i]>large1 && large1!=arr4[i]){
               thidLarge1= secondLarge1;
               secondLarge1= large1;
               large1 = arr4[i];   
          }else if(arr4[i]>secondLarge1 && arr4[i]!=large1){
               thidLarge1=secondLarge1;
               secondLarge1=arr4[i];
          }else if(arr4[i]>thidLarge1 && arr4[i]!=secondLarge1 && arr4[i]!=large1){
               thidLarge1=arr4[i];
          }
     }

console.log(thidLarge1, secondLarge1, large1);

// Remove duplicate values

let arr = [10, 20, 10, 30, 20, 40, 30, 50, 40];;

let result = []; 

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                if(result.includes(arr[j])){
                    continue;
                }
            result.push(arr[j]);
    }  
    }    
}
console.log(result);

// first duplicate number

let arr1 = [10, 20, 10, 30, 20, 40, 30, 50, 40];;

let result1;
let found=false;

for(let i=0; i<arr1.length; i++){
    for(let j=i+1; j<arr1.length; j++){
            if(arr1[i] == arr1[j]){
                result1 = arr1[i];
                found=true;
                break;                   
    }
}
     if(found){
        break;    
     
   
}
}
console.log(result1);

// first duplicate number without nested loop

let arr2 = [10, 20, 10, 30, 20, 40, 30, 50, 40];

let result2=[];

for(let i=0; i<arr2.length; i++){     
    if(result2.includes(arr2[i])){
    console.log("First duplicate:", arr2[i]);
        break;
    }else{
        result2.push(arr2[i]);
    }
}

// first non repeated character 

let arr3 = [10, 20, 60, 30, 20, 40, 30, 50, 70];
let result3 = [];

for(let i=0; i<arr3.length; i++){
    if(arr3.indexOf(arr3[i])==arr3.lastIndexOf(arr3[i])){
        result3.push(arr3[i]);                      
    }
}
 console.log(result3); 

 // Duplicate characters without nested loop

let arr4 = [10, 20, 60, 30, 20, 30, 80, 50, 70];
let result4 = [];

for(let i=0; i<arr4.length; i++){
    if(arr4.indexOf(arr4[i])!= arr4.lastIndexOf(arr4[i])){
        if((result4.includes(arr4[i]))){
            break;
        }else{
            result4.push(arr4[i]);
        }
    }
}
console.log(result4);

// find duplicate numbers with nested loop

let arr5 = [10, 20, 10, 30, 20, 40, 30, 50, 40];;

let result5=[];

for(let i=0; i<arr5.length; i++){
    for(let j=i+1; j<arr5.length; j++){
            if(arr5[i] == arr5[j]){
                if(arr5.includes([arr5[i]])){
                    continue;
        }else{
             result5.push(arr5[i]);
        }
    }
   
}
}
console.log(result5);

// most frequent number

let arr6 = [10, 20, 10, 30, 20, 10, 40, 20, 20];

let maxCount = 0;
let result6;

for(let i = 0; i < arr6.length; i++) { 

    let count = 1;

    for(let j = i+1; j < arr6.length; j++) {
        if(arr6[i] == arr6[j]) {
            count++;
        }
    } 
    if(count>maxCount){
        maxCount= count;
        result6= arr6[i];
    }
}

console.log(result6, "appeared for ", maxCount );

// print frequecy of every element

let arr7 = [10, 20, 10, 30, 20, 10, 40, 20, 20];

let frequency = {};

for(let i = 0; i < arr7.length; i++) {

    if(frequency[arr7[i]]) {
        frequency[arr7[i]]++;
    }
    else {
        frequency[arr7[i]] = 1;
    }
}
console.log(frequency);


