/* Abstraction means hiding unnecessary implementation details 
 and exposing only the essential functionality to the user

 Encapsulation: How do I protect/control the data?
 Abstraction: What does the user need to know/use, and what implementation details can be hidden? */

// Ex:
 class ATM {

    withdraw(amount) {
        this.checkBalance();
        this.dispenseCash(amount);
    }

    checkBalance() {
        console.log("Checking balance...");
    }

    dispenseCash(amount) {
        console.log("Dispensing cash:", amount);
    }
}

let atm = new ATM();

atm.withdraw(500);   // Checking balance...
                     //Dispensing cash: 500

/*
Encapsulation:	                       Abstraction:
Protects/controls data	              Hides implementation complexity
Focuses on how data is accessed	      Focuses on what the user needs to use
private #salary	withdraw()            hides internal steps
Data hiding is important	          Implementation hiding is important       */


// ex2:

class Employee {

    work() {
        throw new Error("work() must be implemented");
    }
}

class Tester extends Employee {

    work() {
        console.log("Tester is testing");
    }
}

class Developer extends Employee {

    work() {
        console.log("Developer is coding");
    }
}

let emp1= new Tester();
let emp2= new Developer();

emp1.work();   // Tester is testing
emp2.work();   // Developer is coding

/* If the child does not override work(), JavaScript follows the prototype chain and looks for work() in the parent.*/