function makeSandwich(bread,filling){
    /*Write a function called makeSandwich and inside it, define:

a getBread() function

a addFillings() function

a serve() function that says:
"Serving a sandwich with [your fillings]"

Then call all of them inside makeSandwich().

*/
function getBread(){
    console.log(`I have 2 slices of ${bread} bread`)

}
function addFillings(){
    console.log(`I have ${filling}`)

}

function serve(){
    console.log(`I have made a sandwich with ${bread} and ${filling}`)

}
getBread();
addFillings();
serve();
}
makeSandwich("bread","cheese");

//arrow function

let greet = (name, timeOfDay) =>`Hey ${name}, good ${timeOfDay}`;


console.log(greet("Nya", "Morning"))