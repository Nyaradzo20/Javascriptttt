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
        if(!available){
            console.log("Sorry, no rooms are available right now.");

        }
    }
     } 

     bookRoom(){

     } 
     getSummary(){

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
let room1 = new Room(1, "Double", true, 900);

hotel.addRoom(room1);
hotel.addRoom(room1);
hotel.addRoom(room1);
hotel.listAvailableRooms();


/*
let room1 = new Room(1, "Double", false, 900);
console.log(room1);
let room2 = new Room(3, "Double", true, 900);
console.log(room2);
*/