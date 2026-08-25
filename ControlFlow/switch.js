let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}

// Ternary Operator

//Instead of
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
// we can write
let age1 = 20;

let result = age1 >= 18 ? "Adult" : "Minor";

console.log(result);                           //Why is it called "ternary", Because it has three parts.