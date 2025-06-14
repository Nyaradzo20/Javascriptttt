class User{
    constructor(username, password){
        this.username =username;
        this._password = password;
    }
 get password(){
    return "You cant, it is private"
 }

 set password(modifiedPin){
    if (modifiedPin.length < 4) {
        console.log("Too short, try again");
    } else{
        this._password = modifiedPin;
        console.log("Continue");
    }
 }
}

let Nyarie = new User("Nyaradzo", "code");
console.log(Nyarie.password)
Nyarie.password = "pie";