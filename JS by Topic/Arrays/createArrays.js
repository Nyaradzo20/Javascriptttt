/*ways to create arrays*/

//1. Array literals - by seperating elements with commas

let Week =["Monday", "Tuesday","Wednesday", "Thursday", "Friday","Saturday", "Sunday"];
console.log(Week);

//2.  using  the Array() constructor
let numbers = Array(1,2,3,4);
let number = Array(1); // returns empty because it cant create an array with a single element

console.log(typeof(numbers))
console.log(numbers)

//spread operator
let a = [1,2,3]
let b =[0,...a,4,5]
console.log(b)

//array.of
let s = Array.of(1,2,3,4);
let r = Array.of(1); // can create an array with a single element
console.log(s)
console.log(r)

//Array.from create an array from an iterable eg string, map

const nam = "Nyaradzo";
let arr = Array.from(nam);
console.log(arr)