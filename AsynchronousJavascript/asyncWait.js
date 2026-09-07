// As in Promis Channing we write:

login()
    .then(() => getUser())
    .then(() => getOrders())
    .then(() => getPayment())
    .catch(error => console.log(error));

// This works, but when there are many steps, it can become harder to read.
// async/await makes Promise-based code look more like normal step-by-step code, like:

await login();
await getUser();
await getOrders();
await getPayment();

// Do login → wait for its result → then do getUser → wait → then getOrders...

// async means: This function works with a Promise and will return a Promise.

async function test() {
    return "Hello";
}
console.log(test());    // Promise { 'Hello' }

// Because we used async, test() returns a Promise.



// await means: Wait for the Promise to finish and give me its result.

function getData() {
    return Promise.resolve("Data Received");
}
async function test() {

    let result = await getData();  // Wait for the Promise returned by getData() and put its fulfilled value into result.

    console.log(result);            // Data Received
}
test();

// await getData(): Wait until getData()'s Promise gives me the result, then store that result in result.



// async/await vs .then():

// Using .then():
function getData() {
    return Promise.resolve("Hello");
}

getData().then(result => {
    console.log(result);           // Hello
});

// Using async/await:
function getData() {
    return Promise.resolve("Hello");
}

async function test1(){
    let result = await getData();
    console.log(result);
}
test1();           // Hello

// Practice ex:

function getName() {
    return Promise.resolve("Prajakta");
}

async function test() {
    let name = await getName();

    console.log(name);
}

test();//                     Prajakta

// async function always returns a Promise.
// await gets the value from that Promise.             


function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function test() {
    console.log("Start");

    let result = await getData();

    console.log(result);
    console.log("End");
}

test();

// async/await with error handling:
// await gives you the fulfilled value. 
// If the Promise is rejected, await throws the rejection, which you normally handle using try/catch.

// Successful Promise

function login() {
    return Promise.resolve("Login successful");
}

async function test() {

    try {
        let result = await login();

        console.log(result);
    }
    catch (error) {
        console.log("Error:", error);
    }
}

test();           // Login successful

// Rejected Promise

function login() {
    return Promise.reject("Login failed");
}

async function test() {

    try {
        let result = await login();

        console.log(result);
    }
    catch (error) {
        console.log("Error:", error);
    }
}

test();            // Error: Login failed

// finally in async wait

async function test() {
    try {
        let result = await Promise.resolve("Success");
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("Test completed");
    }
}

test();        // o/p: Success
//                     Test completed


// Multiple awaits with sequential execution
// Here functions gets executed sequentially as they are written.
// Use sequential when operations depend on each other

function first() {
    return Promise.resolve("First");
}

function second() {
    return Promise.resolve("Second");
}

async function test() {

    console.log("Start");

    let result1 = await first();
    console.log(result1);

    let result2 = await second();
    console.log(result2);

    console.log("End");
}

test();
/* O/p:
Start
First
Second
End          */

// Multiple awaits with parallel execution
// Use parallel when operations are independent



