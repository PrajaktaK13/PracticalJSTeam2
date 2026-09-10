// Inheritance: One class can reuse the properties and methods of another class.
// Class Inheritance: Inheritance allows one class to acquire the properties and methods of another class.
// we use the extends keyword to establish inheritance


// Parent class constrictor: 

class Employee {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        console.log(this.name);
    }
}

class Tester extends Employee {
}

/* class Tester extends Employee means Tester inherits from Employee.
   So Tester can use the methods and properties of Employee.  */

// ex:
let tester = new Tester("Prajakta");   

tester.displayName();      // Prajakta
// We didn't write displayName() inside Tester.
// But Tester can still call it because it inherited it from Employee.

/* Constructor: As in above program, the parent class has a constructor, And the child class doesn't have its own 
constructor ,We can still do: 
let tester = new Tester("Prajakta", "Tester");
The inherited constructor can initialize the object.       */


// Child Class with its own constructor:

class Employee {

    constructor(name, role) {
        this.name = name;
        this.role = role;
        console.log(this.name);
        console.log(this.role);
    }
}

class Tester extends Employee {

    constructor(name, role, tool) {
        super(name, role); 
        this.tool = tool;       
        console.log(this.tool);
    }
}

let tester1 = new Tester("Prajakta", "Tester","Playwright"); 
/* o/p:
Prajakta
Tester
Playwright   */

// super(name, role): calls the parent class constructor, it should be called before 'this'


// Child can have its own methods

class Employee {

    constructor(name) {
        this.name = name;
    }

    login() {
        console.log(this.name, "logged in");
    }
}

class Tester extends Employee {

     constructor(name) {
      super(name);
    }

    testApplication() {
        console.log(this.name, "is testing the application");
    }
}

let tester2 = new Tester("Prajakta");

tester2.login();            // Prajakta logged in
tester2.testApplication();  // Prajakta is testing the application


// Practice Ex1:

class Employee {

    constructor(name) {
        this.name = name;
    }

    display() {
        console.log("Employee:", this.name);
    }
}

class Tester extends Employee {

    constructor(name, tool) {
        super(name);
        this.tool = tool;
    }

    showTool() {
        console.log("Tool:", this.tool);
    }
}

let tester3 = new Tester("Prajakta", "Playwright");

tester3.display();    // Employee: Prajakta
tester3.showTool();   // Tool: Playwright


// Method Overriding: 
//     A child class provides its own implementation of a method that already exists in the parent class.

class Employee {

    work() {
        console.log("Employee is working");
    }
}

class Tester extends Employee {

    work(name) {                         // Here child calss work() overrides parent class work()
        console.log(name," is testing the application");
    }
}

let tester4 = new Tester();

tester4.work("Prajakta");  // Tester is testing the application



// super.method(): Parent behavior + additional child behavior

class Employee {

    work(name1) {
        console.log(name1,"is working");
    }
}

class Tester extends Employee {

    work(name1) {
        super.work(name1);
        console.log(name1,"is testing the application");
    }
}

let tester5 = new Tester();

tester5.work("Prajakta");  // Prajakta is working
                           // Prajakta is testing the application

// Types of Inheritance:

// 1. Single Inheritance

class Employee {
    work() {
        console.log("Working");
    }
}

class Tester extends Employee {
    test() {
        console.log("Testing");
    }
}

// 2. Multilevel Inheritance

class Employee {
    work() {
        console.log("Working");
    }
}

class Tester extends Employee {
    test() {
        console.log("Testing");
    }
}

class AutomationTester extends Tester {
    automate() {
        console.log("Automation");
    }
}

// 3. Hierarchical Inheritance

class Employee {
    login() {
        console.log("Login");
    }
}

class Tester extends Employee {
    test() {
        console.log("Testing");
    }
}

class Developer extends Employee {
    code() {
        console.log("Coding");
    }
}

// 4. Multiple Inheritance : directly not supported

/* A class would inherit from two parent classes.
JavaScript does not support this directly
But similar behavior can be achieved using mixins. */

// Not valid JavaScript
//class Tester extends Employee, Manager {
//}



// instanceof

class Employee {
    constructor(name) {
        this.name = name;
    }

}

class Tester extends Employee {
}

let tester10 = new Tester();

console.log(tester10 instanceof Tester);   // true: meaning tester10 is object of Tester class?
console.log(tester10 instanceof Employee); // true: meaning tester10 is object of Employe class?


// Method lookup / prototype chain — understand how JS finds a method when the child doesn't have it

class Employee {
    work() {
        console.log("Employee working");
    }
}

class Tester extends Employee {
    test() {
        console.log("Tester testing");
    }
}

let tester11 = new Tester();

tester11.work();   // Employee working
/* Tester doesn't have work().
   JavaScript looks: It searches upward until it finds work()
That's the prototype chain.  */

// Practice programms:

class Employee{
    constructor(name,leaveBalance){
      this.name=name;
      this.leaveBalance=leaveBalance;
    }
    applyLeave(days){
         if(days<=this.leaveBalance){
            console.log("Leave approved");
        }else{
           console.log("Insufficient leave balance");
        }
    }
}
class Tester extends Employee{

    constructor(name, leaveBalance, automationTool) {

        super(name, leaveBalance);

        this.automationTool = automationTool;
    }

    runAutomation(){
        console.log(this.name + " is running tests using " + this.automationTool);
    }
}

class SeniorTester extends Tester{
    constructor(name, leaveBalance, automationTool, teamSize){
         super(name, leaveBalance, automationTool);
         this.teamSize = teamSize;
    }
    displayTeam(){
        console.log(this.name + " is in team of " + this.teamSize + " testers");
    }
}
let seniorTester = new SeniorTester(
    "Prajakta",
    20,
    "Playwright",
    5
);
seniorTester.applyLeave(4);
seniorTester.runAutomation();
seniorTester.displayTeam();