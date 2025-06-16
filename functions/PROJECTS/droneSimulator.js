class City {
    constructor(name, x, y, villages = []) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.villages = villages;
    }

    addVillage(village) {
        let existing = this.villages.find(vill => vill.name === village.name)
        if (existing) {
            console.log(`Village ${village.name} already exists in ${this.name}.`);
        }

        else {
            this.villages.push(village);
            console.log(`Village ${village.name} added to ${this.name}.`);
        }
    }



    listVillages(city) {
        //  console.log(city.this.villages);
        console.log(`Villages under ${this.name}:`);
        for (let v of this.villages) {
            console.log(`- ${v.name}`);
        }
    }
}


class Village {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.availableMeds = [];
    }

    deliveryLog(medicine) {
        //log deliveries
        let existingMeds = this.availableMeds.find(meds => meds.name === medicine.name)
        if (existingMeds) {
            existingMeds.amount += medicine.amount;
        }
        else {
            this.availableMeds.push(medicine);
        }
    }

    medList() {
        for (let med of this.availableMeds) {

            if (med.amount <= 25) {
                console.log(`We have ${med.amount}  ${med.name} boxes available and we are due for supply`)

            }
            else {
                console.log(`We have ${med.amount} ${med.name} boxes available`)
            }

        }
    }
}

class Medicine {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}

class Drone {
    constructor(name, medicine, x, y, batteryLife, city, destination) {
        this.name = name;
        this.batteryLife = batteryLife;
        this.medicine = medicine;
        this.x = x;
        this.y = y;
        this.city = city;
        this.destination = destination;
    }
    statusReport() {
        console.log(`${this.name} is carrying: ${this.medicine.name} (${this.medicine.amount} units)`);
        console.log(`Coming from: ${this.city.name}`);
        console.log(` Heading to: ${this.destination.name}`);
        console.log(`Battery level: ${this.batteryLife}%`);
    }
}
// 1. Create Cities
const harare = new City("Harare", 0, 0);
const bulawayo = new City("Bulawayo", 100, 100);

// 2. Create Villages
const chivi = new Village("Chivi", 10, 5);
const gokwe = new Village("Gokwe", 25, 8);

// 3. Add Villages to Cities
harare.addVillage(chivi);    // Should add successfully
harare.addVillage(chivi);    // Should show already exists
bulawayo.addVillage(gokwe);

// 4. List Villages
harare.listVillages();       // Should list Chivi
bulawayo.listVillages();     // Should list Gokwe

// 5. Create Medicine
const malariaMeds = new Medicine("Malaria Meds", 50);
const panado = new Medicine("Panado", 20);   // under 25 to test low supply warning

// 6. Create Drone
const drone1 = new Drone("Falcon", malariaMeds, 0, 0, 80, harare, chivi);

// 7. Report Drone Status
drone1.statusReport();       // Should report full info

// 8. Deliver medicine to Village
chivi.deliveryLog(malariaMeds);
chivi.deliveryLog(panado);   // Pushes a med that triggers supply warning

// 9. Check Village med status
chivi.medList();             // Should show both meds, warn on panado

/*const chivi = new Village("Chivi", 20, 15);

chivi.deliveryLog(new Medicine("Panado", 10));
chivi.deliveryLog(new Medicine("Malaria Meds", 50));
chivi.deliveryLog(new Medicine("Panado", 10)); // Add more to Panado

chivi.medList();
const harare = new City("Harare", 10, 20);
const chivi = new Village("Chivi", 5, 8);
const vil = new Village("Chivi", 5, 8);
harare.addVillage(chivi); // Adds Chivi to Harare
harare.addVillage(vil);//already exists
harare.listVillages();
*/