// A Map stores data in key-value pairs.

let user = new Map();

user.set("name", "Arun");
user.set("role", "Tester");
user.set("experience", 7.5);

console.log(user);   // Map(3) { 'name' => 'Arun', 'role' => 'Tester', 'experience' => 7.5 }

let user1 = new Map([
    ["name", "Shriyans"],
    ["age", 10]
]);

console.log(user1);  // Map(2) { 'name' => 'Shriyans', 'age' => 10 }

// Getting a value — get()

console.log(user1.get("name"));    // Shriyans

/* set() → add/update data
get() → retrieve data   */

// has(): check key is present in map.
let user2 = new Map([
    ["name", "Shriyans"],
    ["age", 10]
]);
console.log(user2.has("name"));   // true
console.log(user2.has("age"));    // true
console.log(user2.has("Shriyans"));   // false

// delete()

//user2.delete("age");
console.log(user2.delete("age"));   // true
console.log(user2);                 // Map(1) { 'name' => 'Shriyans' }

// size:

console.log(user2.size);       //1

// clear(): remove everything

user2.clear();
console.log(user2);    // Map(0) {}

// Dupliacte keys: Map → duplicate key is allowed syntactically, 
// but the latest value replaces the previous value.

let user3 = new Map();

user3.set("name", "Prajakta");
user3.set("role", "Tester");
user3.set("name", "Developer");

console.log(user3.get("name"));   // Developer: Developer get replaced with Prajakta
console.log(user3.size);          // 2
 
// set(): for updating value


user3.set("role", "Test Lead");

console.log(user3.get("role")); // Test Lead

// Map can have different types of keys

/* A Map can use:

String
Number
Boolean
Object
Array
Even a function

as a key.  */

//1. String key

let userA = new Map();

userA.set("name", "Shriyans");

console.log(userA.get("name")); // Shriyans

// 2. Number as key:

let usersB = new Map();

usersB.set(101, "Prajakta");
usersB.set(102, "Rahul");

console.log(usersB.get(101));       // Prajakta

// 3. Boolean as a key

let status1 = new Map();

status1.set(true, "Active");
status1.set(false, "Inactive");

console.log(status1.get(true));    // Active

// 4. Object as a key- doubt?????????

let userC = {
    name: "Prajakta"
};

let map = new Map();
//console.log((userC["name"]));
map.set(userC.name, "Tester");

console.log(map.get(userC.name));   // Tester
console.log((userC["name"]));

// Mixed Set + Map
let numbers = new Set([10, 20, 30, 20, 10]);

numbers.add(40);
numbers.delete(20);

let data = new Map();

data.set("numbers", numbers.size);
console.log(data);            // Map(1) { 'numbers' => 3 }
data.set("has30", numbers.has(30));
console.log(data);            // Map(2) { 'numbers' => 3, 'has30' => true }

console.log(numbers.size);    //3
console.log(numbers.has(20));  // false
console.log(data.get("numbers")); // 3
console.log(data.get("has30"));   //true