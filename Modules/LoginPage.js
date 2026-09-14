export class LoginPage{
     #username;
     #password;

     setCredentials(username, password){
        this.#username = username;
        this.#password = password;
     }
     login(){
     console.log(this.#username,"Logged in successfully");
            }
}
