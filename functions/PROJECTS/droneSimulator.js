class City{
    constructor(name, x,y, villages =[]){
        this.name =name;
        this.x = x;
        this.y = y;
        this.villages = villages;
    }
}


class Village {
    constructor(name,x,y) {
         this.name =name;
        this.x = x;
        this.y = y;
        this.availableMeds = [];
        }

   deliveryLog( medicine){
        //log deliveries
       let existingMeds = this.availableMeds.find(meds => meds.name === medicine.name)
       if(existingMeds)
       {
        existingMeds.amount += medicine.amount;
       }
       else{
        this.availableMeds.push(medicine);
       }
    }

    medList(){
      for(let med of this.availableMeds){
        
        if(med.amount <= 25){
            console.log(`We have ${med.amount}  ${med.name} boxes available and we are due for supply`)
            
        }
        else{
        console.log(`We have ${med.amount} ${med.name} boxes available`)   
         }
          
    }
}
}

class Medicine{
    constructor(name, amount)
    {
        this.name = name;
        this.amount = amount;
    }
}

class Drone{
    constructor(name, speed, x, y,batteryLife){
        this.name = name;
        this.speed = speed;
        this.batteryLife = batteryLife;
    }
}
const chivi = new Village("Chivi", 20, 15);

chivi.deliveryLog(new Medicine("Panado", 10));
chivi.deliveryLog(new Medicine("Malaria Meds", 50));
chivi.deliveryLog(new Medicine("Panado", 10)); // Add more to Panado

chivi.medList();
