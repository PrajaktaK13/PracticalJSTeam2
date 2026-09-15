// Public: A public property or method is something that can be accessed from outside the class.
// Class properties and methods are public by default.
// There is no need to write the word public.

// Public
class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    displayEmployee() {
        console.log(this.name);
        console.log(this.salary);
    }
}

let emp = new Employee("Prajakta", 50000);

console.log(emp.name);
console.log(emp.salary);

emp.displayEmployee();


/*  These are instance properties and method.
this.name
this.salary
displayEmployee() */




// Private: 
// Praivate properties or methods can notbe used or accessed ouside the class.
// We use '#' for praivte properties or methods.

class Employee {

    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;         // private property
    }

    displaySalary() {
        console.log(this.#salary);
    }
    
}

let emp1 = new Employee("Prajakta", 50000);

console.log(emp1.name);       // ✅
emp1.displaySalary();         // ✅ we can access the private properties binding it in public method.

console.log(emp1.#salary);    // ❌ Error


// Protected:
// Protected is not used in JS as there is no any specification for protected properties or methods, 
// so protected will work as public only.

class Employee {

    #employeeId;

    constructor(name, salary, employeeId) {
        this.name = name;           // public property
        this._salary = salary;      // protected property
        this.#employeeId = employeeId;  // private property
    }

    getEmployeeId() {                  // this is the public method who is returnig private property.
        return this.#employeeId;
    }
}

class Tester extends Employee {

    showTesterDetails() {
        console.log(this.name);
        console.log(this._salary);
        console.log(this.getEmployeeId());
    }
}

let emp4= new Tester("Prajakta", 100000, 101);
emp4.showTesterDetails();
/* o/p: 
Prajakta
100000
101               */

