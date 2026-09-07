/* What is a Promise?
A Promise is an object that represents the result of an asynchronous operation that may be available now or later.

A Promise is an object that represents a result that we will get in the future.

Pramises has 2 states:
1. Pending:    ⏳ Waiting...- The operation is still running.
2. Successful: ✅ Success  - The operation completed successfully. or
3. Rejected    ❌ Failed   - The operation failed.                 
    A Promise can move from Pending → Fulfilled or Pending → Rejected.  */

// creating Promise

let promise = new Promise((resolve, reject) => {

});
/* new Promise(...):  creates the Promise object
   resolve("Success"); - fulfills that Promise with the value "Success".
   reject("Failed");   - The operation failed.    */

// Practice Question:

let promise1 = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Login successful");
    } else {
        reject("Login failed");
    }

});        // It does not print anything as here we only creates and resolves the Promise.


// .then() - We use .then() to get the result of promise

let promise2 = new Promise((resolve, reject) => {
    resolve("Login successful");
});

promise2.then((result) => {
    console.log(result);             // Login successful
}); 

// So
resolve("Login successful"); // provides the result
then((result) => {          // Receives/handles the result
    console.log(result);     // result receives whatever value was passed to resolve().In this case "Login successful"
});                          // .then() receives the value without changing its type.

// .then() with calculation

let promise3 = new Promise((resolve, reject) => {
    resolve(10);
});

promise3.then((result) => {
    console.log(result + 5);          // o/p: 15
}); 


// .catch()- reject() sends the value to .catch():

let promise4 = new Promise((resolve, reject) => {
    resolve("Login successful");
    reject("Login failed");
});

promise4.catch((error) => {
    console.log(error);              // o/p: Login failed
});

// resolve(value)  →  .then(result)
// reject(value)   →  .catch(error)


let promise5 = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

promise5
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
// o/p: Error: Something went wrong

// practice ex:

let p10 = new Promise((resolve, reject) => {

    let success = false;

    if (success) {
        resolve("Login successful");
    } else {
        reject("Login failed");
    }

});

p10
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

// Promise chaining:

/* Chaining means connecting multiple .then() methods together.
// Ex:
promise
    .then(...)
    .then(...)
    .then(...);
    The value returned from one .then() goes to the next .then().     */

// Ex:1

let promise6 = new Promise((resolve, reject) => {
    resolve(10);
});

promise6
    .then((result) => {
        console.log(result);              // 10
        return result + 5;                //10+5=15 returned
    })
    .then((result) => {
        console.log(result);              //15
    });

    // ex2:

    let promise7 = new Promise((resolve, reject) => {
    resolve(5);
});

promise7
    .then((result) => {                   // 5 is stored in result
        return result * 2;                // returned 10
    })
    .then((result) => {
        return result + 10;               // 20 returned
    })
    .then((result) => {
        console.log(result);              // o/p: 20
    });


// Promise Chaining: error handling with .catch().

let promise8 = new Promise((resolve, reject) => {
    resolve(20);
    resolve(60);
});

promise8
    .then((result) => {
        if(result<50){
            throw new Error("Failed");
        }else{
            console.log(result);
        }        
    })
    .then((result) => {
        console.log("Second then");
    })
    .catch((error) => {
        console.log(error.message);
    });
/* o/p: Failed - as second resolve- resolve(60) is ignored

Promise like a one-time decision: once it becomes successful or failed, its state cannot be changed.
The first resolve() or reject() wins. Once a Promise is settled, its state and value cannot be changed. */

// finally():
// finally is used when you have some code that you want to execute whether the Promise succeeds or fails.

// Example 1 — Promise succeeds

let promise9 = new Promise((resolve, reject) => {
    resolve("Login successful");
});

promise9
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Process completed");
    });
    // O/p: Login successful
    //      Process completed

    // Example 2 — Promise fails

    let promise10 = new Promise((resolve, reject) => {
    reject("Login failed");
});

promise10
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Process completed");
    });
    // o/p: Login failed
    //      Process completed


// Promise.all()

/* Suppose you have 3 independent tasks:

Task A → 2 seconds
Task B → 3 seconds
Task C → 1 second

If you run them one after another, it takes about:

2 + 3 + 1 = 6 seconds

But if they can run at the same time, you can wait for all of them together:

Task A ───────→ 2 sec
Task B ─────────────→ 3 sec
Task C ──→ 1 sec

Total ≈ 3 sec

That's where Promise.all() is useful.   */

// Basic syntax:

Promise.all([promise1, promise2, promise3]);

// It waits for all Promises to succeed.

// Ex1:

let p1 = Promise.resolve("Login");
let p2 = Promise.resolve("User");
let p3 = Promise.resolve("Orders");

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log(results);     // o/p: ["Login", "User", "Orders"]
    });

// Important point: Promise.all() returns the results in the same order as the Promises were provided.

// Ex2:

let p4 = Promise.resolve(10);
let p5 = Promise.resolve(20);
let p6 = Promise.resolve(30);

Promise.all([p6, p5, p4])
    .then((results) => {
        console.log(results);       // 30, 20, 10
    });

// One very important rule of Promise.all():
// If even one Promise fails, the whole Promise.all() is considered rejected.

let p7 = Promise.resolve(10);
let p8 = Promise.reject("Failed");
let p9 = Promise.resolve(30);

Promise.all([p7, p8, p9])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);         // Failed
    });

// All succeed → .then() → results array
// Any one fails → .catch() → error

// Promise all with timeout

let px = new Promise(resolve => {
    setTimeout(() => resolve("A"), 3000);
});

let py = new Promise(resolve => {
    setTimeout(() => resolve("B"), 1000);
});

let pz = new Promise(resolve => {
    setTimeout(() => resolve("C"), 2000);
});

Promise.all([px, py, pz])
    .then(results => console.log(results));    // o/p: [ 'A', 'B', 'C' ]

    