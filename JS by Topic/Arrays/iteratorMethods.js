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

//returns true if all elements are true

/*
a = a.every(x => x === 5)
console.log(a)
*/

// returns true if some are elements are trrue , even 1
a = a.some(x => x === 5);
console.log(a);

let e = [5,4,3,2,4]

 const d = e.reduce((x, y) => x+y);

 console.log(d)

//flattens  multi dimensional arrays into one standard array, the default is 1 but 
//you can use Infinity for extremely nested arrays

 const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
 console.log(myArr)
const newArr = myArr.flat(Infinity);
 console.log(newArr)