class Hotel{
    constructor(name, rooms =[], bookings =[]){
        this.name = name;
        this.rooms = rooms;
        this.bookings = bookings;
    }
    addRoom(){}
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

}

class Customer{
    constructor(name,id,bookedRoom){
        this.name =name;
        this.id =id;
        this.bookedRoom;
    }
}