// A Generator is a special type of function that can pause its execution and resume later.

// Normal function:

function test() {
    console.log("A");
    console.log("B");
    console.log("C");
}

test();
/* o/p:
A
B
C    */

// A generator can stop at a particular point, give you a value, and then continue from exactly where it stopped.

// We use function* instead of function.

// Ex:1
function* test() {
    console.log("A");    // 1st call execution start, Print

    yield 10;            // 1st call execution paused , Return value

    console.log("B");    // 2nd call execution resumed from where 1st call paused, Print

    yield 20;            // 2nd call execution pasued, Return value

    console.log("C");    // 3rd call execution resumed from where 2nd call paused, Print

    yield 30;            // 3rd call execution paused, Return value
}                        // 4th call execution resumed , Return value 'undefined' and stops.

// yield means : Give this value to the caller and pause the function here.


let gen = test();         //  Calling a generator
// gen stores the Generator Object returned by test().

console.log(gen.next());  // A
                          // { value: 10, done: false }

console.log(gen.next());  // B
                          // { value: 20, done: false }
                          
console.log(gen.next());  // C
                          // { value: 30, done: false }

console.log(gen.next());  // { value: undefined, done: true }


// Ex2:

function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}

let gen1 = numbers();

console.log(gen1.next());    // { value: 10, done: false }
console.log(gen1.next());    // { value: 20, done: false }
console.log(gen1.next());    // { value: 30, done: false }
console.log(gen1.next());    // { value: undefined, done: true }


// Ex3: with return

function* test() {
    yield 10;
    yield 20;
    return 30;
    yield 40;    // never executed
}

let gen2 = test();

console.log(gen2.next());    // { value: 10, done: false }
console.log(gen2.next());    // { value: 20, done: false }
console.log(gen2.next());    // { value: 30, done: true }, here 30 is returned, return ends the generator
console.log(gen2.next());    // { value: undefined, done: true }


/* Remember:
yield → gives a value + pauses
return → gives a value + finishes
closing } → finishes with undefined if no return value*/



// Ex4:

function* test() {
    console.log("A");

    yield 10;

    console.log("B");

    yield 20;

    console.log("C");

    yield 30;
}

let gen3 = test();

console.log("Start");     // Start

console.log(gen3.next());  // A
                           // { value: 10, done: false }
console.log("Middle");    // Middle

console.log(gen3.next());  // B
                           // { value: 20, done: false }
console.log("End");        // End


// Passing value to generator

function* test() {
    let value = yield "Enter your name";   // { value: 'Enter your name', done: false }
    console.log("You entered:", value);    // You entered: Prajakta
}                                          // { value: undefined, done: true }

let gen4 = test();

console.log(gen4.next());

console.log(gen4.next("Prajakta"));     

/* At the above line : generator resumed and
Sends "Prajakta" into the previous yield.
So effectively:
let name = "Prajakta";  */


// Remember : when we pass any value to the generator, it get sends to previous yield.


// Ex5:

function* test() {
    let x = yield 10;
    let y = yield x + 20;

    yield y + 30;
}

let gen5 = test();

console.log(gen5.next());    // { value: 10, done: false }
console.log(gen5.next(5));   // { value: 25, done: false }, 5 will send to prevoius yield,so x=5 so 5+20=25 returned
console.log(gen5.next(10));  // { value: 40, done: false }, 10 will send to previous yield so y= 10, 10+30 = 40 returned
console.log(gen5.next());    // { value: undefined, done: true }


// for....of with generator

function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}

let gen6 = numbers();

for (let value of gen6) {
    console.log(value);
}

/*  o/p:
10
20
30

You don't have to manually write:

gen.next();
gen.next();
gen.next();

The for...of loop automatically keeps calling next() internally. */

//ex2:

function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}

let gen7 = numbers();

console.log(gen7.next()); // { value: 10, done: false }

for (let value of gen7) {  // continues from whre the generator stops
    console.log(value);
}// 20
 // 30


 // yield*: yield* allows a generator to yield values from another iterable.

 // Normal yield: The generator yields the whole array as one value.

 function* numbers() {
    yield [10, 20, 30];
   
}

let gen8 = numbers();

console.log(gen8.next());         // { value: [ 10, 20, 30 ], done: false }
console.log(gen8.next());         // { value: undefined, done: true }


// yield*: goes through the iterable and yields its values one by one:
 function* numbers() {
    yield* [10, 20, 30];
}

let gen9 = numbers();

console.log(gen9.next());         // { value: 10, done: false }
console.log(gen9.next());         // { value: 20, done: false }
console.log(gen9.next());         // { value: 30, done: false }
console.log(gen9.next());         // { value: undefined, done: true }

// yield* can also use another generator

function* first() {
    yield 10;
    yield 20;
}

function* second() {
    yield* first();
    yield 30;
}

let gen10 = second();

console.log(gen10.next());    // { value: 10, done: false }
console.log(gen10.next());    // { value: 20, done: false }
console.log(gen10.next());    // { value: 30, done: false }
console.log(gen10.next());    // { value: undefined, done: true }

/* second() is basically saying:

"First, give me all the values produced by first(), then continue with my own values." 

Remember:
yield  → yield one value, 
yield* → delegate/yield values from another iterable or generator  */







     

