for(let size = 0; size <= 5; size++){

let line = '';

for(let column = 0; column <= 8; column++){
    if((size + column) % 2 === 0){
            line += '#';
        } else {
            line += ' ';
        }

}
console.log(line);




}

