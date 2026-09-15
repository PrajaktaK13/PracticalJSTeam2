/* What is Polymorphism?

The word polymorphism means:

“One thing, many forms.”

In OOP, it means the same method name can behave differently depending on the object or class using it. 

JavaScript does not support traditional method overloading like Java.
JavaScript mainly demonstrates polymorphism through:
Method overriding / runtime polymorphism   */

//ex1:
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}

let dog = new Dog();
let cat = new Cat();

dog.sound();   // Dog barks
cat.sound();   // Cat meows

//ex2

class Employee {
    work() {
        console.log("Employee working");
    }
}

class Tester extends Employee {
    work() {
        console.log("Tester testing");
    }
}

class Developer extends Employee {
    work() {
        console.log("Developer coding");
    }
}

let employees = [
    new Tester(),
    new Developer()
];

for (let emp of employees) {
    emp.work();      // Tester testing
                     // Developer coding
}

// Methode Overloding not possible, if we write multiple methods with same name , latest get overrides previous.
class Employee {
    work() {
        console.log("Employee working");
    }
    work(name){
        console.log(name);
    }
    
}
let emp3= new Employee();
emp3.work();            // undefined
emp3.work("Prajakta");  // Prajakta


// Dynamic typed method overloading

function printWork(employee) {
    employee.work();
}

let tester = {
    work() {
        console.log("Tester testing");
    }
};

let developer = {
    work() {
        console.log("Developer coding");
    }
};

printWork(tester);    // Tester testing
printWork(developer); // Developer coding
