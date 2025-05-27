//Print 4 pomodoro sessions using loops with a 5-min break every 25 minutes (use break after 4 sessions).

for(let cycle = 1; cycle <= 6; cycle++){
    console.log(`Session ${cycle}:`);
    
    for(let pomodoro = 1; pomodoro <= 25; pomodoro++) {   
        if(pomodoro === 1){
            console.log(pomodoro + ' minute');
        } else {
            console.log(pomodoro + ' minutes');
        }
        
    }
    console.log(" ");
    // Only run break loop when needed
    if(cycle === 4) {
        console.log("Break time:");
        for(let breaks = 1; breaks <= 5; breaks++) {
            console.log(breaks);
        }
    }
}