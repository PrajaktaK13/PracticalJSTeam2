/* Closure = the function + its remembered surrounding lexical environment.
 A closure occurs when an inner function remembers and retains access to variables from its outer
 function's scope even after the outer function has finished executing. */

let company = "Mindfire";

function outerFunct() {

    let role = "Tester";

    function innerFunct() {
        console.log(company);
        console.log(role);
    }

    return innerFunct;
}

let result = outerFunct();

result();               // Mindfire
                        // Tester

/* Now let's focus on the one thing that makes this a closure.

What happens?

First:

let result = outerFunct();

outerFunct() executes:

role = "Tester"
        ↓
innerFunct function is created
        ↓
return innerFunct
        ↓
result gets innerFunct

So:

result → innerFunct()

Then outerFunct() is finished.

But when we do:

result();

we are calling innerFunct().

innerFunct() still remembers its surrounding environment:

innerFunct()
  │
  ├── company → Global → "Mindfire"
  │
  └── role → outer() → "Tester"

That's the closure.   */


// Ex2:

function createEmployee(name) {

    function display() {
        console.log(name);
    }

    return display;
}

let employee1 = createEmployee("Prajakta");
let employee2 = createEmployee("Rahul");

employee1();     // Prajakta
employee2();     // Rahul


// Ex3:

function createEmployee(name) {

    function display() {
        console.log(name);
    }

    return display;
}

let employee3 = createEmployee("Prajakta");
employee3 = createEmployee("Rahul");

employee3();             // Rahul


// Ex4: 

function createCounter() {

    let count = 0;

    return function() {                  // Anonymous function
        count++;
        console.log(count);
    };
}

let counter1 = createCounter();
let counter2 = createCounter();

counter1();          // 1
counter1();          // 2

counter2();          // 1
counter2();          // 2
counter1();          // 3  
      
// Every call to the outer function creates a new closure with its own copy of the outer variables.

// Ex: 5

function createBankAccount() {

    let balance = 1000;

    return function(amount) {
        balance = balance + amount;
        console.log(balance);
    };
}

let account = createBankAccount();

account(500);            // 1500
account(200);            // 1700
account(300);            // 2000

// Ex6:

function createBankAccount(initialBalance) {

    let balance = initialBalance;

    return function(amount) {
        balance = balance + amount;
        console.log(balance);
    };
}

let account1 = createBankAccount(1000);
let account2 = createBankAccount(500);

account1(200);         // 1200(1000+200)
account2(100);         // 600(500+100)
account1(300);         // 1500(1200+300)
account2(200);         // 800(600+200)

// Closure with multiple functions- Doubt??????????

function createAccount(initialBalance) {

    let balance = initialBalance;

    function deposit(amount) {
        balance = balance + amount;
    }

    function withdraw(amount) {
        balance = balance - amount;
    }

    function checkBalance() {
        console.log(balance);
    }

    return {                         // return is returning object with 3 proerties: deposit, withdraw, checkBalance
        deposit: deposit, 
        withdraw: withdraw,
        checkBalance: checkBalance
    };
}

let acount = createAccount(1000);

acount.checkBalance();         // 1000

acount.deposit(500);
acount.checkBalance();         // 1500

acount.withdraw(200);
acount.checkBalance();         // 1300

// remember and retain access to balance, even after createCounter() has finished executing.
// That retained access is the closure.




//  Closure with multiple functions, ex2, doubt?????????

function createCounter() {     
       let count = 0;
       return {                          // return is returning object
        increment: function() {            
            count++;
        },

        decrement: function() {            
            count--;
        },

        getCount: function() {           
            console.log(count);
        }
    };
}

let counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

counter.decrement();

counter.getCount();        // 2



