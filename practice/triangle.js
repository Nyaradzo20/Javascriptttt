
/**for (let row = 1; row <= 5; row++) {
  let line = '';
  //inner loop for columns
  for (let rightangle = 1; rightangle <= row; rightangle++) {
    line += '*';
  }
  console.log(line);
}**/


for (let row = 5; row >= 1; row--) {
  let line = '';
  //inner loop for columns
  for (let rightangle = 1; rightangle <= row; rightangle++) {
    line += '*';
  }
  console.log(line);
}

