// Scope means where a variable can be accessed in your program.
//Ex:1: Access global variable directly

let name1 = "Prajakta";

console.log(name1);

// Ex2: Global variable accessed inside a function

let name2 = "Prajakta";

function test() {
    console.log(name2);
}

test();                             // Prajakta

//Ex:3: Global variable accessed inside a block

let age = 30;

if(age > 18) {
    console.log(age);               // 30
}

// Ex4: Global variable inside function and block

let x="Rahul";

function test1(){
    let y="Prajakta";
    console.log(x);                    // Rahul
    if(true){        
        let z="Meena";
        console.log(x);                // Rahul
        console.log(y);                // Prajakta
        console.log(z);                // Meena
    }
}
test1();

// Ex5: Same variable name

let name3 = "Prajakta";

function test() {

    let name3 = "Rahul";

    console.log(name3);                   // Rahul
}

test();

console.log(name3);                       // Prajakta

// Modify global varibale

let count = 10;

function test() {
    console.log(count);           //10
    count = 20;
    console.log(count);           //20
}

test();

console.log(count);                // 20

// scope+hoisting

let p = 100;

function test() {

    console.log(p);                     // ReferenceError as it decalres p in function but as its not initialize.

    let p = 200;
}

test();