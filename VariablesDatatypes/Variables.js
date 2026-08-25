// A variable is simply a named container used to store a value.

let num = 103;
num = 105;                           //Allowed as value can be reassigned to let.

const sub_name= "JavaScript";
// sub_name = "Java";               //Not Allowed as value can't be reassigned to const.

var id= 201;
id= 204;                            //Allowed as value can be reassigned to var.


// Scope: where a variable can be accessed.

{
    let name = "Prajakta";
    const number= 3000;
    var passed= true;
}

// console.log(name);                // not allowed as let has block scope.
//console.log(number);               // not allowed as cosnt has block scope.
console.log(passed);                 // allowed as var has fuction scope.
 
