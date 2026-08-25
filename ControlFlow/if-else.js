// if
let age = 20;

if (age >= 18) {
    console.log("You can vote");
}

//if-else
let age = 15;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

//if..else-if..else

let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail"); 
}

//nested-if

let age = 25;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    }
}
//same as
if (age >= 18 && hasID) {
    console.log("Entry allowed");
}

//nested-if-else

let age = 20;
let hasID = false;

if (age >= 18) {
    console.log("Adult");

    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
}