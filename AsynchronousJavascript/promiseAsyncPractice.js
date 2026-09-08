// Practice Ex1: Login Validation

function login(username, password) {
    return new Promise((resolve, reject) =>{
        if(username ==="admin" && password ==="1234"){
            resolve("Login successful");
        }else{
            reject("Login failed")
        }
    });
}
login("admin", "1234")
.then((result)=>{
    console.log(result); 
})
.catch((error) =>{
    console.log(error);
});

login("admin", "9999")
.then((result)=>{
    console.log(result); 
})
.catch((error) =>{
    console.log(error);
});

// Promise Channing ex:

function getNumber(num){
    return Promise.resolve(num);
}
getNumber(10)
.then((result) => {
    return result*2;
})
.then((result) =>{
    return result+20;
})
.then((result) =>{
    return result+5;
})
.then((result) =>{
    console.log(result);
})

//async+promise

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });
}

async function test() {

    console.log("Start");

    let result = await getData();

    console.log(result * 2);

    console.log("End");
}

test();

console.log("Outside");

/*
Start
Outside       // as test() get paused for 2 sec
20 
End   */

// Conditional result

function checkUser(age) {
    if(age>18){
        return Promise.resolve("User is eligible");
    }else{
        return Promise.reject("User is not eligible");
    }
}
async function test2(age){
    try{
         let result= await checkUser(age);
         console.log(result);
    }
    catch(error){
        console.log(error);
    }
    
}
test2(19);  // User is eligible
test2(10);  // User is not eligible
 
// Dependant operation

function login() {
    return Promise.resolve("Login successful");
}

function getUserDetails() {
    return Promise.resolve("User details fetched");
}

function getOrders() {
    return Promise.resolve("Orders Fetched");
}

async function test3() {
    let loginReult= await login();
    console.log(loginReult);
    let userDeatilsResult= await getUserDetails();
    console.log(userDeatilsResult);
    let ordersDeatilsResult= await getOrders();
    console.log(ordersDeatilsResult);
    
}
test3();
/* Login successful
User details fetched
Orders Fetched  */


// Practice example of attempt

function fetchData(atte) {
    if(atte< 3){
        return Promise.reject("Failed");
    }else{
        return Promise.resolve("Data fetched successfully")
    }
}
async function test4(){
    let attempt = 1;

    while (attempt <= 3) {

        console.log("Attempt", attempt);

        try{
        let result= await fetchData(attempt);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
        attempt++;
    }
   
}

test4();
/* o/p:
Attempt 1
Failed
Attempt 2
Failed
Attempt 3
Data fetched successfully   */

// Independent tasks + Promise.all()

function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Users fetched");
        }, 2000);
    });
}

function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Products fetched");
        }, 3000);
    });
}

function getOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Orders fetched");
        }, 1000);
    });
}

async function testDashboard() {
    let result = await Promise.all([getUsers(),getProducts(),getOrders()]);
    console.log(result);
    
}
testDashboard();  // [ 'Users fetched', 'Products fetched', 'Orders fetched' ]

// Promise.all with failures

function getUsers() {
    return Promise.resolve("Users fetched");
}

function getProducts() {
    return Promise.reject("Products API failed");
}

function getOrders() {
    return Promise.resolve("Orders fetched");
}

async function test5() {
    try{
        let result= await Promise.all([getUsers(),getProducts(),getOrders()]);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
    
}
test5();  // Products API failed

// Parallel execution

function getUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve("User"), 2000);
    });
}

function getOrders() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Orders"), 3000);
    });
}
async function test() {
    let result= await Promise.all([getUser(),getOrders()]);
    console.log(result);
    
}
test();  // [ 'User', 'Orders' ]

// 3 independent API calls, but you only want to continue if all three succeed.

function getProfile() {
    return Promise.resolve("Profile");
}

function getSettings() {
    return Promise.resolve("settings");
}

function getNotifications() {
    return Promise.resolve("Notifications");
}

async function test() {
    try{
       let result= await Promise.all([getProfile(), getSettings(), getNotifications()]);
       for(let i=0; i<result.length;i++)
       console.log(result[i]);
    }
    catch(error){
        console.log(error);
    }
}
test();
/* o/p: 
Profile
settings
Notifications  */

// Process users one by one

let users = ["Admin", "Tester", "Guest"];

function checkUser(user) {
    if(user === "Admin"){
        return Promise.resolve("Admin access granted");
    }else if(user === "Tester"){
        return Promise.resolve("Tester access granted");
    }
    else{
        return Promise.reject("Guest access denied");
    }    
}
async function test() {
    for(let i=0; i<users.length; i++){
        try{
        let result = await checkUser(users[i]);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
    }         
}
test();

/* Admin access granted
Tester access granted
Guest access denied  */

// Stop after 2 failures

let users1 = ["Admin", "Guest", "Tester", "Guest", "Admin"];
function checkUser(user) {
    if (user === "Admin") {
        return Promise.resolve("Admin passed");
    } 
    else if (user === "Tester") {
        return Promise.resolve("Tester passed");
    } 
    else {
        return Promise.reject("Guest failed");
    }
}
async function processUsers() {
    let count=0;
    for(let i=0; i<users1.length; i++){
        try{
            let result= await checkUser(users1[i]);
            console.log(result);
          }
          catch(error){
            console.log(error);
            count++;
          }
          if(count === 2){
            break;
          }
}    
  
}
processUsers();
/* o/p: Admin passed
        Guest failed
        Tester passed
        Guest failed  */

// Async processing with results

let users2 = ["Admin", "Tester", "Guest", "Admin", "Guest"];
let passedUsers=[];
let failedUsers=[];

function checkUser1(user){
    if (user === "Admin" || user === "Tester"){
        return Promise.resolve(user);
    }else{
        return Promise.reject(user);
    } 
}
async function test() {
    for(let i=0; i<users2.length; i++){
      try{
        let result = await checkUser1(users2[i]);
        passedUsers.push(result);
      }
      catch(user){         
        failedUsers.push(user);
      }
    } 
    console.log("Passes users:",passedUsers);  
    console.log("Failed users:",failedUsers);   
}
test();
/* o/p: Passes users: [ 'Admin', 'Tester', 'Admin' ]
        Failed users: [ 'Guest', 'Guest' ] */

// Async + calculation + filtering

let orders = [100, 250, 50, 400, 150];
let processedOrders=[];
let sum=0

function processOrder(amount) {
    if(amount>=200){
        return Promise.resolve(amount-amount*0.1);
    }else{
        return Promise.resolve(amount);
    }    
}
async function processOrders() {
    for(let i=0; i<orders.length; i++){
       let result= await processOrder(orders[i]);
       processedOrders.push(result);
       sum=sum+result;
    }
    console.log(processedOrders);
    console.log(sum);    
}
processOrders();
/* o/p: [ 100, 225, 50, 360, 150 ]
885   */



// async/await + Promise + loop + conditional retry + results.

let orders2 = [100, 300, 500, 200];
let successfulPayments= [];
let failedPayments=[];

function processPayment(amount, attempt) {
    if(amount === 100 || amount === 200){
        return Promise.resolve(amount);
    }else if(amount === 300 && attempt>= 2 ){
        return Promise.resolve(amount);
    }else{
        return Promise.reject(amount);
    }        
}

let attempt=1;
async function testPayment() {
    for (let i=0; i<orders2.length; i++){
    try{        
         let result= await processPayment(orders2[i], attempt);  
         successfulPayments.push(result);   
    }
    catch(failedAmount){
        let result= failedAmount;
        attempt++;         
        failedPayments.push(result);     
    }
}  
    console.log(successfulPayments, failedPayments);         
}
testPayment();