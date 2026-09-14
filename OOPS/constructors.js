// A constructor is a special method inside a class that runs automatically when we create an object using new.

class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

let emp1 = new Employee("Prajakta", 60000);

// When JS sees: 
   new Employee("Prajakta", 60000);
// the constructor actually runs:
// constructor(name1, salary) {
//     this.name = name1;
//     this.salary = salary;
// };
/*
A class is a form/template:

Employee
----------------
Name:
Salary:

When you create an employee:

new Employee("Prajakta", 60000)

the constructor fills in the details:

Employee
----------------
Name: Prajakta
Salary: 60000  */

// Types of Constructors

// 1. Default Constructor

// If you don't write a constructor, JavaScript provides a default one.

let emp2 = new Employee();

// you can stiil do

let emp3 = new Employee();

// 2. Parameterized Constructor

class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

let emp = new Employee("Prajakta", 60000);
console.log(emp.name,emp.salary);      // Prajakta 60000.

// 3. Constructor with Default Parameters ex1:

class Employee {

    constructor(name = "Unknown", salary = 0) {
        this.name = name;
        this.salary = salary;
    }
}

let emp4 = new Employee("Prajakta", 60000);
let emp5 = new Employee();

console.log(emp4.name, emp4.salary);    // Prajakta 60000
console.log(emp5.name, emp5.salary);    // Unknown 0


// Multiple constructors

class Employee {

    // constructor() {
    //     console.log("Default constructor");
    // }

    constructor(name) {
        console.log("Parameterized constructor", name);
    }
}

let emp8= new Employee();       // Parameterized constructor undefined
let emp9= new Employee("Prajakta");  // Parameterized constructor Prajakta


// arguments inside constructor

// arguments is a special object available inside a normal function (including a normal class constructor).

// It contains the values that were actually passed when the function/constructor was called.

class Employee {

    constructor() {
        console.log(arguments);
    }
}

let emp11 = new Employee("Prajakta", 60000);   
/* o/p: [Arguments] { '0': 'Prajakta', '1': 60000 }
arguments
   ↓
0 → "Prajakta"
1 → 60000          */

class Employee {

    constructor(name, salary) {
        console.log(arguments[0]);
        console.log(arguments[1]);
        console.log(arguments[2]);
    }
}

let emp12 = new Employee("Prajakta", 60000, "Tester");
/* o/p: Prajakta
60000
Tester         */



// arguments with different number of arguments
// JavaScript allows the number of arguments to be different from the number of parameters.

class Employee {

    constructor(name, salary) {
        console.log("arguments length:", arguments.length);
        console.log("arguments:", arguments);
    }
}

let emp13 = new Employee();      // arguments length: 0
                                 // arguments: [Arguments] {}
let emp14 = new Employee("Prajakta");  // arguments length: 1
                                       // arguments: [Arguments] { '0': 'Prajakta' }
let emp15 = new Employee("Prajakta", 60000);  // arguments length: 2
                                              // arguments: [Arguments] { '0': 'Prajakta', '1': 60000 }
let emp16 = new Employee("Prajakta", 60000, "Tester"); // arguments length: 3
                                                     // arguments: [Arguments] { '0': 'Prajakta', '1': 60000, '2': 'Tester' }


// Rest Parameter: A rest parameter allows us to collect multiple arguments into a single array.

function test(...args) {
    console.log(args);
}
test("Prajakta", 60000, "Tester");  // [ 'Prajakta', 60000, 'Tester' ]


