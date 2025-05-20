//○ Loop through 30 days and print: “Day X: Habit completed!” (Skip Sundays using continue).

console.log('------------------');
console.log('Habit Tracker');
console.log('------------------');

for(let day =1; day <= 30; day++){
    //skip sundays
    if(day % 7 === 0){
        console.log('rest day');
        console.log('------------------');

        continue;
    }
    console.log(`Day ${day}: Habit completed!`);
}
