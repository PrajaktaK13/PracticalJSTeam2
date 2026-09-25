// A variable is simply a named container used to store a value.

let num = 103;
num = 105;                           //Allowed as value can be reassigned to let.

const sub_name= "JavaScript";
// sub_name = "Java";               //Not Allowed as value can't be reassigned to const.

var id= 201;
id= 204;                            //Allowed as value can be reassigned to var.


let num1= 12;
//let num1= 16;                       // Not allowed as value can not be redeclared to let

const num2= 34;
//const num2= 56;                     // Not allowed as value can not be redclared to const

var num3= 90;
var num3= 94;                       // allowed as value can be redeclared to var.


// Scope: where a variable can be accessed.

{
    let name = "Prajakta";
    const number= 3000;
    var passed= true;
}

// console.log(name);                // not allowed as let has block scope.
//console.log(number);               // not allowed as cosnt has block scope.
console.log(passed);                 // allowed as var has fuction scope.

// different types of variables:

let x = 10;              // outer/global-level variable

class Employee {

    static company = "Mindfire";  // static property

    constructor(name) {
        this.name = name;         // instance property
    }

    display() {
        let salary = 50000;       // local variable
    }
}
 
