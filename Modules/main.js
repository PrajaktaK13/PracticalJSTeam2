import { Tester } from "./Tester.js";
import {Developer} from "./Developer.js"
import { LoginPage } from "./LoginPage.js";
import { add, sub, mul, div } from "./calculator.js";


let tester = new Tester();
let developer= new Developer();

// //tester.login();      // Employee logged in
// tester.testApplication();   // Tester is testing the application
// //tester.logout();     // Employee logged in
// developer.login();   // Employee logged in
// developer.writeCode();  // Developer is writting code.
// tester.logout();     // Employee logged out


let login1 = new LoginPage();
login1.setCredentials("Prajakta","1234");
login1.login();


console.log(add(20,10));
console.log(sub(20,10));
console.log(mul(20,10));
console.log(div(20,10));