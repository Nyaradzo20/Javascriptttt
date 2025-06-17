class Hotel{
    constructor(name, rooms =[], bookings =[]){
        this.name = name;
        this.rooms = rooms;
        this.bookings = bookings;
    }
    addRoom(room){
       let existing = this.rooms.find(r => r.roomNumber === room.roomNumber)
       if(existing){
        console.log(`Room number ${room.roomNumber} already exists in ${this.name}`);
       }
       else{
        this.rooms.push(room);
        console.log(`Room number ${room.roomNumber} has been added to ${this.name}`);
       }
    }
     listAvailableRooms(){
       let available = false;
      for (let r of this.rooms){
        if(r.isBooked === false){
            console.log(`Room ${r.roomNumber} is available for booking`)
            available = false;
        }
        if(r.isBooked === true){
            console.log("Sorry, no rooms are available right now.");

        }
    }
     } 

     bookRoom(room, customer){
        for (let r of this.rooms)
        {
            if (r.roomNumber === room.roomNumber && r.isBooked === false) {
      r.isBooked = true;
      this.bookings.push({ room: r.roomNumber, customer: customer.name });
      console.log(`${customer.name} has booked room ${r.roomNumber}`);
      return;
    }
  }

       console.log(`Room ${room.roomNumber} is already booked or doesn't exist.`);
    }
        


     
     getSummary(){
        for(let r of this.bookings)
        {
            console.log(`${r.customer} booked  room ${r.room}`);
           
        }
        if (this.bookings.length === 0) {
        console.log("No bookings yet.");
}


     }
}
class Room{
    constructor(roomNumber,type , isBooked, price){
        
        this.roomNumber = roomNumber;
        this.type = type;
        this.isBooked = isBooked;
        this.price = price;
    }
  toggleBookingStatus(){

  }
}

class Customer{
    constructor(name,id,bookedRoom){
        this.name =name;
        this.id =id;
        this.bookedRoom;
        
    }
    book(room){

    }
}
let hotel = new Hotel("Sheraton");
console.log(hotel);
let room1 = new Room(1, "Double", false, 900);
let  Nya = new Customer("Nya",4, 1);
let room2 = new Room(3, "Double", false, 900);

hotel.addRoom(room1);
hotel.addRoom(room2);
hotel.listAvailableRooms();
hotel.bookRoom(room1, Nya)
hotel.listAvailableRooms();
hotel.getSummary();

/*
let room1 = new Room(1, "Double", false, 900);
console.log(room1);*/
