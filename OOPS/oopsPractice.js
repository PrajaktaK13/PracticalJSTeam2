// 1. Encapsulation:

// Protected property:
class User{
    constructor(name){
        this.name=name;
        this._age=0;
    }
    setAge(age){
        if(age>0){
            this.age=age;
        }else{
            console.log("Invalid age");
        }
    
    }
    getCread(){
        console.log("Name:",this.name,"Age:",this.age);
    }
}

    let user = new User("Prajakta");
    user.setAge(28);
    user.getCread();



// Private methods

// Private methods:

class LoginPage {

    login(username, password) {  
        if(this.#validateCredentials(username, password)){
               console.log("Login successful");
        }else{
               console.log("Invalid credintials");
        }          
             
    }

    #validateCredentials(username, password) {
        if (username === "" || password === "") {
            return false;
        }else{
            return true;
        }
    }
}

let login = new LoginPage();

login.login("Prajakta", "1234");
login.login("","");

//login.#validateCredentials("Prajakta", "1234");  // not allowed as #validateCredentials is private method , can not be used outside of the class.

// 2. Polomorphism + Encapsulation + static

class Payment{
   static #totalAmount=0;

    static payAmount(amount){
        Payment.#totalAmount = Payment.#totalAmount + amount;
        console.log("Total amount will be now:",Payment.#totalAmount);
    }
    getPaymentStatus() {
    console.log("Payment processing...");
}
}
class CreditCardPayment extends Payment{
    payAmount(amount){
        console.log("Credit card payment successful");
        Payment.payAmount(amount);        
    }
}
class UPIPayment extends Payment{
    payAmount(amount){
        console.log("UPI payment successful");
        Payment.payAmount(amount);       
    }
}
class NetBankingPayment extends Payment{
    payAmount(amount){
        console.log("Net Banking payment successful");
        Payment.payAmount(amount);        
    }
}
let payments = [
    new CreditCardPayment(),
    new UPIPayment(),
    new NetBankingPayment()
];
for (let payment of payments) {
    payment.payAmount(5000);
}


