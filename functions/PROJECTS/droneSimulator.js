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
      for(let list of availableMeds){
        console.log(`We have ${med.name} : ${med.amount} availabe`)
        if(med.amount <= 25){
            console.log("Running low")
        }
        else{
        console.log("No supply due")
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
/*const chivi = new Village("Chivi");
console.log(chivi);
chivi.deliveryLog("Panado", 10);
chivi.deliveryLog("Malaria Meds", 100);
chivi.medList();*/