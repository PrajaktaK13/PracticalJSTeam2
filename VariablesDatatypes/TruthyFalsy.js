//Truthy = JavaScript treats the value as true
// Anything that is NOT Falsy is generally Truthy.

// Non empty string
let userName = "Prajakta";
if(userName){
    console.log("name is valid");
}else{
    console.log("name is not valid");
}

// negative number
let num= -1;
if(num){
    console.log("True");
}else{
    console.log("False");
}

// []
if ([]) {
    console.log("Truthy");
}// Truthy

//{}
if ({}) {
    console.log("Truthy");
}// Truthy

//Falsy = JavaScript treats the value as false

// false value
let num1= false;
if(num1){
    console.log("value is true");
}else{
    console.log("value is false");
}

//empty string
let str= "";
if(str){
    console.log("string is nonempty");
}else{
    console.log("string is empty");
}

//undefined
let number;
if(number){
    console.log("numer is defined");
}else{
    console.log("numer is undefined");
}

//null
let number1= null;
if(number1){
    console.log("numer is not null");
}else{
    console.log("numer is null");
}

//NaN

let number2= NaN;
if(number2){
    console.log("numer is not NaN");
}else{
    console.log("numer is NaN");
}


// number 0 gives falsy
if (0) {
    console.log("Truthy");
} else {                                   //Output: Falsy
    console.log("Falsy");           
}

// but "0" gives Truthy
if ("0") {
    console.log("Truthy");
} else {                                   // Output: Truthy because: 0 → number → Falsy and "0" → string → Truthy
    console.log("Falsy");
}

// Truthy , Falsy values and logical oeprators AND, OR


// AND operator
console.log(true && "Hello");         
// Output : Hello 
// as in AND as "If the first value is truthy, give me the second value.".

console.log(false && "Hello");
// Outut : false 
// If the first value is false, the whole AND condition cannot become true.

console.log("Hello" && true);

// OR Operator
console.log(false || "Hello"); 
// Output : Hello
// As first value is false, it will return 2nd value

console.log("Hello" || "World");
// Output: Hello 
// As first value is true no need to check 2nd value.

console.log(false || "Hello");   // Hello
console.log(false && "Hello");   // false
console.log(true && "Hello");    // Hello
console.log("Hello" && true);




