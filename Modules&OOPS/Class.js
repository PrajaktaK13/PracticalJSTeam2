/* Class: A class is a blueprint/template for creating objects.
          It can contain properties and methods that define the data and behavior of those objects.
 Constructor: A constructor is a special method in a class that is automatically called when 
              an object is created using the new keyword. It is commonly used to initialize object properties.
 this: this refers to the current object in the context of a class method or constructor.  */
 

// Basic Class Syntax

class User {     
    constructor(name, age) {        
        this.name = name;
        this.age = age;
    }

    displayUser() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

let user1 = new User("Prajakta", 30);

user1.displayUser();  // Name: Prajakta
                      // Age: 30
                
/* Remember: 
Constructor = automatically runs when an object is created.
this = 'this' refers to the current object.
this.name = name;: Store the name received by the constructor inside the current object's name property.*/

// Create multiple objects

class User {

    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    displayUser() {
        console.log(this.name, this.role);
    }
}

let user2 = new User("Prajakta", "Tester");
let user3 = new User("Rahul", "Developer");
let user4 = new User("Sneha", "Manager");

user2.displayUser();   // Prajakta Tester
user3.displayUser();   // Rahul Developer
user4.displayUser();   // Sneha Manager






