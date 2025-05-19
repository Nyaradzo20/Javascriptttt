// 1. Right-angled triangle
/*
for (let row = 1; row <= 5; row++) {
  let line = '';
  //inner loop for columns
  for (let rightangle = 1; rightangle <= row; rightangle++) {
    line += '*';
  }
  console.log(line);
}

console.log('------------------');
console.log('------------------');

//2. Left-angled triangle

for (let row = 1; row <= 5 ; row++) {
    let line = '';
    //inner loop for columns

    //for spaces
   for (let space = 1; space <= 5 - row; space++) {
    line += ' ';
  }

    for (let rightangle = 1; rightangle <= row; rightangle++) {
        line +='*';
   
    }
     console.log( line);
    
    
    } 
console.log('------------------');   
console.log('------------------');
//🔸 3. Inverted Left Triangle
 //start with the rows
 for(let row = 0;row <=5;row++){
    let star = "";
//this loop is for column     
    for(let column = 1;column<=5-row; column++){
        //what we want to prin
        star+="*";
    }
    //printing when done
    console.log(star);
 }
 */

 //pyramid
 console.log('------------------');
 console.log('Pyramid');
console.log('------------------');

for(let row = 0; row <=5; row++){
    let star = "";
    //this loop is for column
    for(let space = 1; space <= 5 - row; space++){
        //what we want to print
        star += " ";
    }
    for(let column = 1; column <=row; column++){
        //what we want to print
        if(row % 2 != 0){
        star += " *";
    }
        else{
            star += " ";
        }
      //  star += "*";
    }
    console.log(star);
}