// An arrow function is simply another way to write a function.

// Normal function:
function greet(){
    console.log("Hello");
}
greet();// Hello.

// Arrow function:

const greet = () => {
    console.log("Hello");
};
greet();// Hello

// Normal function with parameters:
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));  // 30

// Arrow function with parameters:

const add = (a, b) => {
    return a + b;
};
console.log(add(10, 20)); //30

/* (a, b) => {
    return a + b;
}                    : Arrow function

const add = ...  : stores that function in the variable add.  */

// The arrow function:

const add = (a, b) => {
    return a + b;
};
console.log(add(10, 20)); // 30

// can be written as:
const add = (a, b) => a + b;     // no need to write return keyword
console.log(add(10, 20));        // as If you use { }, you normally need return if you want to return a value.

// We use const here because we are storing the function in a variable,
//  and we don't plan to assign a different value/function to that variable later.

// Arrow function as a callback

setTimeout(() => {
    console.log("Hello");
}, 2000);   // Hello after 2 sec

//Arrow functions with arrays

let numbers = [10, 20, 30];

let result = numbers.map(num => num * 2);

console.log(result);   // [ 20, 40, 60 ]

// Arrow function returning object

const getUser = () => {
    return {
        name: "Prajakta",
        role: "Tester"
    };
};
console.log(getUser());    // { name: 'Prajakta', role: 'Tester' }

// async


const getUserData = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            let success = true;

            if (success) {
                resolve("User data fetched successfully");
            } else {
                reject("Failed to fetch user data");
            }

        }, 2000);
    });
};


// Async arrow function
const getUser1 = async () => {

    console.log("Start");

    try {
        // Wait for the Promise to complete
        let result = await getUserData();

        console.log(result);

    } catch (error) {
        console.log("Error:", error);
    }
    console.log("End");
}; 
getUser1();
/* o/p:
Start
User data fetched successfully
End
*/