// Public: A public property or method is something that can be accessed from outside the class.
// Class properties and methods are public by default.
// There is no need to write the word public.


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

class Employee {

    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    displaySalary() {
        console.log(this.#salary);
    }
    
}

let emp1 = new Employee("Prajakta", 50000);

console.log(emp1.name);       // ✅
emp1.displaySalary();         // ✅ we can access the private properties binding it in public method.

console.log(emp1.#salary);    // ❌ Error

