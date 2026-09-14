// export/import allow classes to be shared between files;
import { Animal1 } from "./Animal1.js";   // bring Animal1 from Animal1.js.

class Dog extends Animal1 {

    bark() {
        console.log("Dog is barking");
    }
}

let dog = new Dog();

dog.eat();     // Animal is eatiang
dog.bark();    // Dog is eating