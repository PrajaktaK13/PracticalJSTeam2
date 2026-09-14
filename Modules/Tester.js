import { Employee } from "./Employee.js";

export class Tester extends Employee {

    testApplication() {
        super.login();
        console.log("Tester is testing the application");
        super.logout();
    }
}