//for each applies a function to each element of an array

let numbers  = [1, 2,4]
numbers.forEach(double)


function double(item)
{
    let sum = item * 2;
   console.log( item + "* 2"+"=" + sum );
}
// parameters can include index and the entire array too

/* output::::  1* 2=2
               2* 2=4
               4* 2=8
*/
let numbe  = [1, 2,4]
numbe.map(double)

//map::: same as for eacch but does not modify the array, it returns a new one instead
 let days = Array.of("Monday","Tuesday","Wednesday");
  days.map(Day)
  
 
 function Day (Fun){
     console.log(Fun + " "+"day")
    
 }

 //Filter, filters array and returns new value
 let a = [5,4,3,2,1];
 //a = a.filter(x => !(x % 2)) //return 2,4....
//console.log(a)

// finds an element's index


/*
a = a.findIndex(x => x === 1)
 console.log(a)
 */

//stops after finding first one

/* a = a.find(x =>  !(x % 2));
console.log(a)
*/
a = a.every(x => x === 5)
console.log(a)