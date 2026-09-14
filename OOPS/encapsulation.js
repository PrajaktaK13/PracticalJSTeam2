/* Encapsulation means bundling data and the methods that operate on that data together inside a class,
   while controlling how that data can be accessed or changed.
       Encapsulation means wrapping data and related methods together in a class and controlling access to that data.
 */

/* You have your bank balance, but you don't directly manipulate it:

❌ Directly change balance
        ↓
    balance = 100000

Instead, you use controlled methods:

        ATM
         │
   ┌─────┴─────┐
   ↓           ↓
deposit()   withdraw()         */


// Ex

class BankAccount {

    #balance = 0;

    deposit(amount) {
        this.#balance = this.#balance + amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let account1 = new BankAccount();
let account2 = new BankAccount();

account1.deposit(5000);
account2.deposit(10000);


console.log(account1.getBalance());    // 5000
console.log(account2.getBalance());    // 10000

// Ex2:

class Employee {

    #salary;

    constructor(salary) {
        this.#salary = salary;
    }

    setSalary(newSalary) {

        if (newSalary >= 0) {         // salary should not be negative.
            this.#salary = newSalary;          
        } else {
            console.log("Invalid salary");
        }
    }

    getSalary() {
        return this.#salary;
    }
}

let emp = new Employee(50000);

console.log(emp.getSalary());
emp.setSalary(60000);
console.log(emp.getSalary());
emp.setSalary(-100000);
console.log(emp.getSalary());    // 60000

// So Encapsulation doesn't just hide data. It allows us to control how the data is accessed and modified.


// Getters and Setters:

/* Getter — get

A getter is a special method used to read/access a property. */

class Employee {

    #salary = 50000;

    get salary() {
        return this.#salary;
    }
}
let emp1 = new Employee();

console.log(emp1.salary);        // 50000 // calls get salary().

/* here we have written emp.salary not emp.salary() as
That's because salary is a getter, and JavaScript lets us use it like a property.  */



// Setter — set
//A setter is used to change/update a property.

class Employee {

    #salary = 50000;

    get salary() {            // getter        
        return this.#salary;
    }

    set salary(newSalary) {   // setter
        if (newSalary >= 0) {
            this.#salary = newSalary;
        } else {
            console.log("Invalid salary");
        }
    }
}

let emp2 = new Employee();

console.log(emp2.salary);   // 50000  // calls getter salary()

emp2.salary = 60000;                  // calls setter salary()

console.log(emp2.salary);   // 60000  

// learn private and public difference , variables and methods

