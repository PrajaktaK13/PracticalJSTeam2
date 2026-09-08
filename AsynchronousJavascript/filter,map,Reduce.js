// filter: filter() is used when you want to select elements from an array based on a condition.

let numbers = [10, 15, 20, 25, 30];

let result = numbers.filter((num) => {
    return num > 20;
});

console.log(result);     // [25, 30]
console.log(numbers);    // [ 10, 15, 20, 25, 30 ]- original array does not get changed

/* Very important

The callback must return a true/false condition.

let result = numbers.filter((num) => {
    return num > 20;
});

If condition is true → element is included.

If condition is false → element is excluded.  */

// Practice Ex1: Array of numbers

let numbers1 = [5, 12, 18, 21, 30];

let result1 = numbers1.filter((num) => {
    return num % 2 === 0;
});

console.log(result1);   //[ 12, 18, 30 ]

// Practice Ex2: Array of String

let users2 = ["Admin", "Tester", "Developer", "Guest", "Manager"];

let result2 = users2.filter((user) => {
    return user.length > 5;               // user is the local varible of callback function.
});

console.log(result2);  // [ 'Tester', 'Developer', 'Manager' ]

// Practice Ex3: Array of Objects

let results = [
    { test: "Login", status: "Pass" },        // array of objectes
    { test: "Search", status: "Fail" },
    { test: "Upload", status: "Pass" },
    { test: "Download", status: "Fail" }
];

let failedTests = results.filter((result) => {
    return result.status === "Fail";
});

console.log(failedTests);
/* o/p:
[
  { test: 'Search', status: 'Fail' },
  { test: 'Download', status: 'Fail' }
]   */


  // Map: map() transforms every element of an array and returns a new array.

let numbers3 = [10, 20, 30, 40];

let result3 = numbers3.map((num) => {
    return num * 2;
});

console.log(result3);     // [ 20, 40, 60, 80 ]
console.log(numbers3);    // [ 10, 20, 30, 40 ]- Original array does not changed.

/* filter → some elements may be removed

map → every element is transformed

And just like filter(), map() returns a new array.   */

// Practice Ex1: Numbers

let numbers4 = [5, 10, 15, 20];

let result4 = numbers4.map((num) => {
    return num + 5;
});

console.log(result4);     // [ 10, 15, 20, 25 ]

// Practice Ex2: Strings

let names5 = ["prajakta", "rahul", "amit"];

let result5 = names5.map((name) => {
    return name.toUpperCase();
});

console.log(result5);    // [ 'PRAJAKTA', 'RAHUL', 'AMIT' ]

// Practice Ex3: Objects

let users = [
    { name: "Prajakta", role: "Tester" },
    { name: "Rahul", role: "Developer" },
    { name: "Amit", role: "Admin" }
];

let names = users.map((user) => {
    return user.name;
});
console.log(names);       // [ 'Prajakta', 'Rahul', 'Amit' ]

// Practice Ex4: Tricky

let numbers6 = [1, 2, 3, 4, 5];

let result6 = numbers6.map((num) => {
    return num % 2 === 0;
});

console.log(result6);  // [ false, true, false, true, false ]


// reduce(): is slightly different from filter() and map()
// because it usually takes an array and produces one final value.

// Practice Ex1:

let numbers7 = [10, 20, 30, 40];

let total = numbers7.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);    // 100
/* num = current array element
   sum = accumulated result so far

   => {
         return sum + num;
      }, 0);       here we are telling the Initial sum = 0                    */

// Practice Ex2:

let numbers8 = [2, 3, 4];

let result8 = numbers8.reduce((product, num) => {
    return product * num;
}, 1);

console.log(result8);   // 24

// Practice Ex: with Objects

let tests = [
    { name: "Login", duration: 10 },
    { name: "Search", duration: 20 },
    { name: "Upload", duration: 15 }
];

let totalTime = tests.reduce((total, test) => {
    return total + test.duration;
}, 0);

console.log(totalTime);  // 45


// Programms:

// Ex1:

let tests1 = [
    { name: "Login", status: "Pass", duration: 10 },
    { name: "Search", status: "Fail", duration: 20 },
    { name: "Upload", status: "Pass", duration: 15 },
    { name: "Download", status: "Fail", duration: 25 },
    { name: "Logout", status: "Pass", duration: 5 }
];

let failedTestObjects= tests1.filter((test)=>{
        return test.status === "Fail";
});
let testNames= failedTestObjects.map((test) => {
    return test.name;
});
let totalDuration = tests1.reduce((total , test) =>{
    return total + test.duration;
},0);

console.log(failedTestObjects);  
/* o/p: [
  { name: 'Search', status: 'Fail', duration: 20 },
  { name: 'Download', status: 'Fail', duration: 25 }
]*/ 
console.log(testNames);            // [ 'Search', 'Download' ]
console.log(totalDuration);        // 75

// above program can ne written as:

let failedTestNames1= tests1.filter((test)=>{
        return test.status === "Fail";
})
.map((test) => {
    return test.name;
});

// find only pass tests duration

let failedtestDuration= tests1.filter((test) =>{
    return test.status === "Fail";
})
.reduce((total, test) => {
        return total + test.duration;
},0);
console.log(failedTestNames1);            // [ 'Search', 'Download' ]
console.log(failedtestDuration);          // 45

// Ex2:

let employees = [
    { name: "Asha", salary: 30000, department: "QA" },
    { name: "Rahul", salary: 45000, department: "Dev" },
    { name: "Neha", salary: 50000, department: "QA" },
    { name: "Amit", salary: 35000, department: "Dev" }
];

// Task: Find the names of employees whose salary is greater than ₹35,000.


let empNames= employees.filter((emp) => {
    return emp.salary > 35000;
})
.map((emp) => {
    return emp.name;
});
console.log(empNames);


// total price of all items using reduce().
let cart = [
    { item: "Laptop", price: 50000 },
    { item: "Mouse", price: 1000 },
    { item: "Keyboard", price: 2000 },
    { item: "Headphones", price: 3000 }
];

let totalPrice= cart.reduce((total, item) => {
    return total + item.price;
},0);

console.log(totalPrice);

// Find total bill considering quantity

let cart1 = [
    { item: "Laptop", price: 50000, quantity: 1 },
    { item: "Mouse", price: 1000, quantity: 2 },
    { item: "Keyboard", price: 2000, quantity: 1 },
    { item: "Headphones", price: 3000, quantity: 2 }
];
let totalBill= cart1.reduce((total, item)=>{
    return total + item.quantity * item.price;
},0);
console.log(totalBill);

// Find the total amount spent only on Delivered orders.

let orders = [
    { product: "Laptop", price: 50000, quantity: 1, status: "Delivered" },
    { product: "Mouse", price: 1000, quantity: 2, status: "Cancelled" },
    { product: "Keyboard", price: 2000, quantity: 1, status: "Delivered" },
    { product: "Headphones", price: 3000, quantity: 2, status: "Delivered" },
    { product: "Monitor", price: 15000, quantity: 1, status: "Cancelled" }
];

let totalAmount= orders.filter((product)=>{
    return product.status === "Delivered";
})
.map((product)=>{
    return product.price * product.quantity;
})
.reduce((total, price) => {
    return total + price;
},0);
console.log(totalAmount);

// Employee Bonus

let employees1 = [
    { name: "Asha", salary: 30000, experience: 2, department: "QA" },
    { name: "Rahul", salary: 50000, experience: 5, department: "Dev" },
    { name: "Shriyans", salary: 45000, experience: 4, department: "QA" },
    { name: "Amit", salary: 60000, experience: 7, department: "Dev" },
    { name: "Sneha", salary: 35000, experience: 3, department: "QA" }
];

let totalBonus = employees1.filter((emp)=>{
     return emp.department === "QA" && emp.experience >= 3;
})
.map((emp) => {
      return emp.salary* 0.1;
})
.reduce((total , bonus) => {
      return total + bonus;
},0);

console.log(totalBonus);

// condition in reduce: Calculate total salary of QA employees

let employees2 = [
    { name: "Asha", salary: 30000, department: "QA" },
    { name: "Rahul", salary: 50000, department: "Dev" },
    { name: "Neha", salary: 45000, department: "QA" },
    { name: "Amit", salary: 60000, department: "Dev" },
    { name: "Sneha", salary: 35000, department: "QA" }
];

let tsalary = employees2.reduce((total, emp) => {
    if(emp.department === "QA"){
         total = total + emp.salary;
    } 
    return total;     
},0);

console.log(tsalary);