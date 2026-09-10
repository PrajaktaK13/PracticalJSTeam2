// Inheritance: One class can reuse the properties and methods of another class.
// Class Inheritance: Inheritance allows one class to acquire the properties and methods of another class.
// we use the extends keyword to establish inheritance.


// Write with with private, public, protected


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

// Public , Private and Protected:

// Public: A public property or method is something that can be accessed from outside the class.
// Class properties and methods are public by default.

class Employee {

    constructor(name) {
        this.name = name;         // public property
    }

    display() {                   // public method
        console.log("Employee:", this.name);
    }
}

class Tester extends Employee {

    show() {                       // public method
        console.log("Tester:", this.name);
    }
}

let test = new Tester("Prajakta");

console.log(test.name);     // Prajakta
test.display();             // Employee: Prajakta
test.show();                // Tester: Prajakta


// Private:

// Private properties:

class Employee {

    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }
}

class Tester extends Employee {

    show() {
        console.log(this.name);
        //console.log(this.#salary); // wrong as #salary is private method
        console.log(this.getSalary());// so we can use getSalary() to access #salary.
    }
}

let test1 = new Tester("Prajakta", 50000);

test1.show();

// Private Method:

class Employee {

    #calculateBonus() {
        return 5000;
    }

    showBonus() {
        console.log(this.#calculateBonus());
    }
}

class Tester extends Employee {

    testBonus() {
        //this.#calculateBonus();  // wrong as calculateBonus is private method.
        this.showBonus(); //     // so we can call showBonus() to access calculateBonus.
    }
}

let test2 = new Tester();

test2.testBonus();


/* Protected: This property is intended for internal/subclass use. Please don't access it directly.
But JavaScript does not enforce this. 
    JavaScript does not have a built-in protected access modifier. Developers commonly use an underscore 
prefix as a convention to indicate that a property or method is intended for internal or subclass use, 
but it is not enforced by JavaScript */

class Employee {

    constructor(name, salary) {
        this.name = name;
        this._salary = salary;
    }
}

class Tester extends Employee {

    showSalary() {
        console.log(this._salary);
    }
}

class Tester2 extends Tester{
    showSalary() {
        console.log(this._salary);
    }
}
let test3 = new Tester2("Prajakta", 50000);

test3.showSalary();   // 50000 // That's because _salary is not truly protected.