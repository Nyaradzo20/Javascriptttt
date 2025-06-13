// Function to greet a user by name
function Greet(name){
   
    console.log ("Hello " + name);
    
}

let name = "Nyari"; // Define a name variable
Greet(name);        // Call the greet function



// Function to add two numbers
function Add(a,b){
    return a+b;
}
let a = 5;
let b = 7;

let result = Add(a, b); // Store the result of addition
console.log(result);    // Print the result


// Function to get the first character of a string
function getFirstChar(str){
    return str[0];
}

let str = "FUMBLE";
console.log(getFirstChar(str)); // Print the first character


// Function to convert a string to uppercase
function toUpperCase(stri) {
    return stri.toUpperCase();
    
}
let stri = "not a loser!";
console.log(toUpperCase(stri)); // Print the uppercase string


// Function to return the greater of two numbers
function maxOfTwo(c, d){
    return Math.max(c,d);
}

let c = 5;
let d = 2;
console.log(maxOfTwo(c,d)); // Print the greater number


// Function to reverse a string
function reverseString(strin){
    return strin.split("").reverse().join("");
}
 let strin = "GREAT DAY";
 console.log(reverseString(strin)); // Print the reversed string