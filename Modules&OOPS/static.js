/*static: 
    Normally, a property or method belongs to the object created from a class.
With static, it belongs to the class itself.
Class
  │
  ├── static property/method
  │
  ├── Object 1
  ├── Object 2
  └── Object 3    */

// Normal property

class Employee {
    constructor(name) {
        this.name = name;
    }
}

let emp1 = new Employee("Prajakta");
let emp2 = new Employee("Rahul");

console.log(emp1.name);
console.log(emp2.name);

// Here name belongs to each object.


// Static Property

class Employee {
    static company = "Mindfire";
}
console.log(Employee.company);    // Mindfire // accessing it using the class name    

let emp = new Employee();

console.log(emp.company); // undefined // Because company is static. It belongs to Employee, not emp.

/* Remember:
Normal property → object.property

Static property → Class.property  */


// Static Method:

class Employee {

    static companyName() {
        console.log("Mindfire");
    }
}
Employee.companyName();    // Mindfire
let em = new Employee();     
em.companyName();          // TypeError


// Practice Ex1:

class Employee {

    static company = "Mindfire";

    constructor(name) {
        this.name = name;
    }
}

let emp3 = new Employee("Prajakta");

console.log(emp3.name);          // Prajakta
console.log(Employee.company);   // Mindfire
console.log(emp3.company);       // undefined

// this keyword in static method

class Employee {

    static company = "Mindfire";
    

    static displayCompany() {
        console.log(this.company);
    }
    
}

Employee.displayCompany();    // Mindfire// Inside a static method, this refers to the class itself.
// so this.company is effectively referring to: Employee.company

/* Remember
Normal method:
this → current object

Static method:
this → class  */

// Practice Program1:

class TestSuite{

    static totalTests = 0;

    constructor(testName){
    this.testName= testName;
    }
    
    static addTest(){
        this.totalTests++;         
    }

    displayTest(){
        console.log("You have done the test",this.testName);
    } 

}

let test1 = new TestSuite("Login Test");
let test2 = new TestSuite("Upload Test");
let test3 = new TestSuite("Download Test");

test1.displayTest();
test2.displayTest();
test3.displayTest();

TestSuite.addTest();
TestSuite.addTest();
TestSuite.addTest();

console.log("Total tests are:",TestSuite.totalTests);

/* We make totalTests and addTest() static  because we don't want each 
 object to have its own test count. We want one count shared at the class level. */

