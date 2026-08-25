// AND Operator : Both conditions should be true
let age = 25;
let hasLicense = true;

console.log(age >= 18 && hasLicense);

//OR Operator : Atleast one condition should be true

let isAdmin = false;
let isManager = true;

console.log(isAdmin || isManager);

// NOT Operator: reverse boolean value.

let isLoggedIn = true;

console.log(!isLoggedIn);

// Combining logical operators

let candidateAge = 25;
let isIndian = true;
let hasPassport = false;

if (candidateAge >= 18 && (isIndian || hasPassport)) {
    console.log("Eligible");
}else{
     console.log("Not Eligible");
}