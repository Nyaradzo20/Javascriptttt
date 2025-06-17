class Hotel{
    constructor(name, rooms =[], bookings =[]){
        this.name = name;
        this.rooms = rooms;
        this.bookings = bookings;
    }
    addRoom(newRoom){
        

    }
     listAvailableRooms(){

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

let room1 = new Room(1, "Double", false, 900);
console.log(room1);
let room2 = new Room(3, "Double", true, 900);
console.log(room2);