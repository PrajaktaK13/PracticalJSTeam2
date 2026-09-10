// Iterator: An iterator is an object that lets us go through a collection one value at a time.

let numbers = [10, 20, 30];

/*An iterator can give us:

10
20
30

one by one.*/

let numbers1 = [10, 20, 30];

let iterator = numbers1[Symbol.iterator]();   // iterator is an iterator object

// Symbol.iterator is Symbol used to access an object's iterator,// doubt??????
// which allows its values to be retrieved one by one using next().

console.log(iterator.next());  // o/p: { value: 10, done: false }
console.log(iterator.next());  // o/p: { value: 20, done: false }
console.log(iterator.next());  // o/p: { value: 30, done: false }
console.log(iterator.next());  // o/p: { value: undefined, done: true }


/*  value: next value from iterator position.
    done: iterator finished?    */

// practice ex:

let fruits1 = ["Apple", "Banana", "Mango"];

let iterator1 = fruits1[Symbol.iterator](); 

/* fruits1[Symbol.iterator]:  Access/call the iterator provided by fruits.
   fruits[Symbol.iterator](): call that method
   When we call it, JavaScript gives us an iterator object.
   let iterator = fruits[Symbol.iterator]() : Take the iterator object returned by that method and 
                                               store it inside a variable called iterator.*/


console.log(iterator1.next());   // { value: 'Apple', done: false }
console.log(iterator1.next());   // { value: 'Banana', done: false }
console.log(iterator1.next());   // { value: 'Mango', done: false }
console.log(iterator1.next());   // { value: undefined, done: true }

// String iterator

let name2 = "QA";

let iterator2 = name2[Symbol.iterator]();

console.log(iterator2.next());      // { value: 'Q', done: false }
console.log(iterator2.next());      // { value: 'A', done: false }
console.log(iterator2.next());      // { value: undefined, done: true }

// Set iterator

let numbers3 = new Set([10, 20, 30]);

let iterator3 = numbers3[Symbol.iterator]();

console.log(iterator3.next());    // { value: 10, done: false }
console.log(iterator3.next());    // { value: 20, done: false }
console.log(iterator3.next());    // { value: 30, done: false }
console.log(iterator3.next());    // { value: undefined, done: true }


// differnt ex:

let numbers4 = [10, 20, 30, 40];

let iterator4 = numbers4[Symbol.iterator]();

console.log(iterator4.next());    // { value: 10, done: false }
console.log(iterator4.next());    // { value: 20, done: false }

for (let value of iterator4) {    // The for...of loop continues from the current iterator position
    console.log(value);           // 30
                                  // 40
}

// Ex2:

let numbers5 = [10, 20, 30];

let iterator5 = numbers5[Symbol.iterator]();

console.log(iterator5.next());   // { value: 10, done: false }

for (let value of iterator5) {
    console.log(value);     // 20
}                           // 30

console.log(iterator5.next());  // { value: undefined, done: true }

// Map iterator

let user6 = new Map([
    ["name", "Prajakta"],
    ["role", "Tester"],
    ["age", 38]
]);

let iterator6 = user6[Symbol.iterator]();
  
console.log(iterator6.next());      // { value: [ 'name', 'Prajakta' ], done: false }
console.log(iterator6.next());      // { value: [ 'role', 'Tester' ], done: false }
console.log(iterator6.next());      // { value: [ 'age', 38 ], done: false }
console.log(iterator6.next());      // { value: undefined, done: true }


// Map iterator with Keys()

let user7 = new Map([
    ["name", "Prajakta"],
    ["role", "Tester"],
    ["age", 38]
]);

let iterator7 = user7.keys();

// console.log(iterator7.next());   // { value: 'name', done: false }
// console.log(iterator7.next());   // { value: 'role', done: false }
// console.log(iterator7.next());   // { value: 'age',  done: false }
// console.log(iterator7.next());   //{ value: undefined, done: true }

// Map iterator with Values()

let iterator8 = user7.values();

// console.log(iterator8.next());  // { value: 'Prajakta', done: false }
// console.log(iterator8.next());  // { value: 'Tester', done: false }
// console.log(iterator8.next());  // { value: 38, done: false }
// console.log(iterator8.next());  // { value: undefined, done: true }

// Map iterator with entries()

let iterator9 = user7.entries();

console.log(iterator9.next());   // { value: [ 'name', 'Prajakta' ], done: false }
console.log(iterator9.next());   // { value: [ 'role', 'Tester' ], done: false }
console.log(iterator9.next());   // { value: [ 'age', 38 ], done: false }
console.log(iterator9.next());   // { value: undefined, done: true }


// custom iterator add.

let numbers10 = [10, 20, 30];

let iterator10 = {
    index: 0,

    next() {
        if (this.index < numbers10.length) {
            return {
                value: numbers10[this.index++],
                done: false
            };
        }

        return {
            value: undefined,
            done: true
        };
    }
};

console.log(iterator10.next());      // { value: 10, done: false }
console.log(iterator10.next());      // { value: 20, done: false }
console.log(iterator10.next());      // { value: 30, done: false }
console.log(iterator10.next());      // { value: undefined, done: true }